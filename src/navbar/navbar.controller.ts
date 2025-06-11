import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NavbarService } from './navbar.service';
import { navbarDto } from './dto/create-navbar.dto';
import { UpdateNavbarDto } from './dto/update-navbar.dto';

@Controller('navbar')
export class NavbarController {
  constructor(private readonly navbarService: NavbarService) {}

  @Post()
  create(@Body() createNavbarDto: navbarDto) {
    return this.navbarService.create(createNavbarDto);
  }

  @Get()
  findAll() {
    return this.navbarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.navbarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNavbarDto: UpdateNavbarDto) {
    return this.navbarService.update(+id, updateNavbarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navbarService.remove(+id);
  }
}
