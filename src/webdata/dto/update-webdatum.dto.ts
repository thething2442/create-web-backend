import { PartialType } from '@nestjs/mapped-types';
import { createWebdatumDto } from './create-webdatum.dto';

export class UpdateWebdatumDto extends PartialType(createWebdatumDto) {}
