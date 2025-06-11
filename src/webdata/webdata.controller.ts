import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebdataService } from './webdata.service';
import { createWebdatumDto } from './dto/create-webdatum.dto';
import { UpdateWebdatumDto } from './dto/update-webdatum.dto';

@Controller('webdata')
export class WebdataController {
  constructor(private readonly webdataService: WebdataService) {}

  @Post()
  create(@Body() createWebdatumDto: createWebdatumDto) {
    return this.webdataService.create(createWebdatumDto);
  }

  @Get()
  findAll() {
    return this.webdataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.webdataService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWebdatumDto: UpdateWebdatumDto) {
    return this.webdataService.update(id, updateWebdatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.webdataService.remove(id);
  }
}
