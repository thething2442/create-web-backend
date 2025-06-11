import { Injectable } from '@nestjs/common';
import { CreateHerosectionDto } from './dto/create-herosection.dto';
import { UpdateHerosectionDto } from './dto/update-herosection.dto';

@Injectable()
export class HerosectionService {
  create(createHerosectionDto: CreateHerosectionDto) {
    return 'This action adds a new herosection';
  }

  findAll() {
    return `This action returns all herosection`;
  }

  findOne(id: number) {
    return `This action returns a #${id} herosection`;
  }

  update(id: number, updateHerosectionDto: UpdateHerosectionDto) {
    return `This action updates a #${id} herosection`;
  }

  remove(id: number) {
    return `This action removes a #${id} herosection`;
  }
}
