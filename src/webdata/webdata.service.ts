import { Injectable } from '@nestjs/common';
import { createWebdatumDto } from './dto/create-webdatum.dto';
import { UpdateWebdatumDto } from './dto/update-webdatum.dto';
import   db  from '../turso/config';
import { webdata } from '../../drizzle/schema';
import { v4 as uuidv4 } from 'uuid';
import { InferInsertModel, eq } from 'drizzle-orm';
type NewWebdata = InferInsertModel<typeof webdata>;
@Injectable()
export class WebdataService {
  async create(createWebdatumDto: createWebdatumDto) {
    const newWebdata: NewWebdata = {
      id: uuidv4(),
      title: createWebdatumDto.title,
      website: createWebdatumDto.website,
      description: createWebdatumDto.description,
      jsondata: JSON.stringify(createWebdatumDto.jsondata ?? {},),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: createWebdatumDto.user,
    };

    const result = await db.insert(webdata).values(newWebdata).returning();
    return result[0];
  }

  async findAll() {
    return db.select().from(webdata);
  }

  async findOne(id: string) {
    const result = await db.select().from(webdata).where(eq(webdata.id, id)).limit(1);
    return result[0] || null;
  }

  async update(id: string, updateWebdatumDto: UpdateWebdatumDto) {
    const updatedData: Partial<NewWebdata> = {
      ...updateWebdatumDto,
      updatedAt: new Date().toISOString(),
    };
  
    // Serialize jsondata if present
  
    const result = await db
      .update(webdata)
      .set(updatedData)
      .where(eq(webdata.id, id))
      .returning();
  
    return result[0] || null;
  }
  

  async remove(id: string) {
    const result = await db.delete(webdata).where(eq(webdata.id, id)).returning();
    return result[0] || { message: 'Nothing deleted' };
  }

  async findAllByUser(userId: string) {
    return db.select().from(webdata).where(eq(webdata.userId, userId));
  }
}
