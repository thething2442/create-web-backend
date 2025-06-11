import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCtaDto } from './dto/create-cta.dto';
import { UpdateCtaDto } from './dto/update-cta.dto';
import db from 'src/turso/config';
import { cta } from 'drizzle/schema';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CtaService {
  async create(createCtaDto: CreateCtaDto) {
    await db.insert(cta).values({
      id: uuidv4(),
      title: createCtaDto.title,
      desription: createCtaDto.description,
      planName: createCtaDto.planName,
      benefits: createCtaDto.benefits,
      tiers: JSON.stringify(createCtaDto.tiers), // Assuming `tiers` is a `text("tiers", { mode: "json" })` field
    });
  }

  async findAll() {
    return await db.select().from(cta);
  }

  async findOne(id: string) {
    const result = await db.select().from(cta).where(eq(cta.id, id));
    if (!result.length) {
      throw new NotFoundException(`CTA with ID ${id} not found`);
    }
    return result[0];
  }

  async update(id: string, updateCtaDto: UpdateCtaDto) {
    const result = await db
      .update(cta)
      .set({
        ...updateCtaDto,
        tiers: updateCtaDto.tiers
          ? JSON.stringify(updateCtaDto.tiers)
          : undefined,
      })
      .where(eq(cta.id, id))
      .returning();

    if (!result.length) {
      throw new NotFoundException(`CTA with ID ${id} not found`);
    }
    return result[0];
  }

  async remove(id: string) {
    const result = await db.delete(cta).where(eq(cta.id, id)).returning();
    if (!result.length) {
      throw new NotFoundException(`CTA with ID ${id} not found`);
    }
    return { message: `Removed CTA with ID ${id}`, entry: result[0] };
  }
}
