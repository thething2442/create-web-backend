import { Injectable } from '@nestjs/common';
import { CreateTableOfContentDto } from './dto/create-table_of_content.dto';
import { UpdateTableOfContentDto } from './dto/update-table_of_content.dto';
import { tableofcontents } from 'drizzle/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import db from 'src/turso/config';

@Injectable()
export class TableOfContentsService {
  async create(createTableOfContentDto: CreateTableOfContentDto) {
    const newtableofcontents = {
      id: uuidv4(),
      updated: new Date().toISOString(),
      createdat: new Date().toISOString(),
      datepublish: createTableOfContentDto.datepublish,
      post: createTableOfContentDto.post,
      title: createTableOfContentDto.title,
      description: createTableOfContentDto.description,
      imagesource: createTableOfContentDto.imageSource,
      subcontent: createTableOfContentDto.subcontent
    };
    return await db.insert(tableofcontents).values(newtableofcontents);
  }

  async findAll() {
    return await db.select().from(tableofcontents);
  }

  async findOne(id: string) {
    return await db
      .select()
      .from(tableofcontents)
      .where(eq(tableofcontents.id, id));
  }

  async update(id: string, updateTableOfContentDto: UpdateTableOfContentDto) {
    return await db
      .update(tableofcontents)
      .set({
        ...updateTableOfContentDto,
        updatedAt: Date.now()
      })
      
      .where(eq(tableofcontents.id, id));
  }

  async remove(id: string) {
    return await db
      .delete(tableofcontents)
      .where(eq(tableofcontents.id, id));
  }
}
