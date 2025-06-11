import { PartialType } from '@nestjs/mapped-types';
import { CreateTableOfContentDto } from './create-table_of_content.dto';

export class UpdateTableOfContentDto extends PartialType(CreateTableOfContentDto) {}
