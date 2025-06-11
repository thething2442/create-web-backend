import { Module } from '@nestjs/common';
import { TableOfContentsService } from './table_of_contents.service';
import { TableOfContentsController } from './table_of_contents.controller';

@Module({
  controllers: [TableOfContentsController],
  providers: [TableOfContentsService],
})
export class TableOfContentsModule {}
