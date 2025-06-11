import { Injectable } from '@nestjs/common';
import { navbarDto } from './dto/create-navbar.dto';
import { UpdateNavbarDto } from './dto/update-navbar.dto';
import db from 'src/turso/config';
import {v4 as uuidv4} from 'uuid'
@Injectable()
export class NavbarService {
  async create(createNavbarDto: navbarDto) {
    const navbardata ={
      id:uuidv4(),
      name:createNavbarDto.name,
      url:createNavbarDto.url
    } ;
 
  }

  findAll() {
    return `This action returns all navbar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} navbar`;
  }

  update(id: number, updateNavbarDto: UpdateNavbarDto) {
    return `This action updates a #${id} navbar`;
  }

  remove(id: number) {
    return `This action removes a #${id} navbar`;
  }
}
