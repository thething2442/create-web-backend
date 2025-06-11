import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import db from 'src/turso/config';
import { comments } from 'drizzle/schema';
import {v4 as uuid4} from 'uuid'
@Injectable()
export class CommentsService {
 async create(createCommentDto: CreateCommentDto) {

    const commentsValue ={
      id:uuid4(),
      userId:createCommentDto.userId,
      comments:createCommentDto.comment,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    const result = await db.insert(comments).values(commentsValue).returning()

    return result[0];
  }


  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
