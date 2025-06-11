import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TableOfContentsService } from './table_of_contents.service';
import { CreateTableOfContentDto } from './dto/create-table_of_content.dto';
import { UpdateTableOfContentDto } from './dto/update-table_of_content.dto';

@Controller('table-of-contents')
export class TableOfContentsController {
  constructor(private readonly tableOfContentsService: TableOfContentsService) {}

  @Post()
  create(@Body() createTableOfContentDto: CreateTableOfContentDto) {
    return this.tableOfContentsService.create(createTableOfContentDto);
  }

  @Get()
  findAll() {
    return this.tableOfContentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tableOfContentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTableOfContentDto: UpdateTableOfContentDto) {
    return this.tableOfContentsService.update(id, updateTableOfContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tableOfContentsService.remove(id);
  }
}
