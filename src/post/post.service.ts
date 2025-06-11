import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import db from 'src/turso/config';
import { post,tableofcontents } from '../../drizzle/schema';  // adjust path
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostService {
  async create(createPostDto: CreatePostDto) {
    const newPost = {
      id: uuidv4(),
      userId: createPostDto.userId ?? '',  // Fallback to empty string
      tableOfContents: JSON.stringify(createPostDto.tableOfContents || {}),
      title: createPostDto.title ?? '',
      description: createPostDto.description || '',
      post: JSON.stringify(createPostDto.post || {}),
      imageThumbnail: createPostDto.imageThumbnail || '',
      summary: createPostDto.summary || '',
      updatedAt: new Date().toISOString(),
      createAt: new Date().toISOString(),
      publishedDate: createPostDto.publishDate || '',
      tags: JSON.stringify(createPostDto.tags || []),
      creator: createPostDto.creator || ''
    };
    
    await db.insert(post).values(newPost);
    return newPost;  // optionally, or fetch it back with select
  }

  async findAll() {
    const allPosts = await db.select().from(post);
    return allPosts.map(p => ({
      ...p,
      tableOfContents: p.tableOfContents,
      post: JSON.parse(p.post),
      tags: JSON.parse(p.tags),
    }));
  }

  async findOne(id: string) {
    const postResult = await db.select().from(post).where(eq(post.id, id)).limit(1);
    if (!postResult[0]) {
      throw new NotFoundException('Post not found');
    }
    const p = postResult[0];
    return {
      ...p,
      tableOfContents:p.tableOfContents,
      post: JSON.parse(p.post),
      tags: JSON.parse(p.tags),
    };
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const updatePayload = {
      ...(updatePostDto.title && { title: updatePostDto.title }),
      ...(updatePostDto.description && { description: updatePostDto.description }),
      ...(updatePostDto.tableOfContents && { tableOfContents: JSON.stringify(updatePostDto.tableOfContents) }),
      ...(updatePostDto.post && { post: JSON.stringify(updatePostDto.post) }),
      ...(updatePostDto.imageThumbnail && { imageThumbnail: updatePostDto.imageThumbnail }),
      ...(updatePostDto.summary && { summary: updatePostDto.summary }),
      ...(updatePostDto.publishDate && { publishedDate: updatePostDto.publishDate }),
      ...(updatePostDto.tags && { tags: JSON.stringify(updatePostDto.tags) }),
      ...(updatePostDto.creator && { creator: updatePostDto.creator }),
      updatedAt: new Date().toISOString(),
    };

    await db.update(post).set(updatePayload).where(eq(post.id, id));
    const updatedPost = await this.findOne(id);
    return updatedPost;
  }

  async remove(id: string) {
    await db.delete(post).where(eq(post.id, id));
    return { message: 'Post deleted successfully' };
  }
  async relation_table_of_content() {
    return await db
      .select({
        post,
        tableOfContent: tableofcontents
      })
      .from(post)
      .leftJoin(tableofcontents, eq(post.tableOfContents, tableofcontents.id));
  }
  
}
