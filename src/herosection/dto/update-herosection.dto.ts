import { PartialType } from '@nestjs/swagger';
import { CreateHerosectionDto } from './create-herosection.dto';

export class UpdateHerosectionDto extends PartialType(CreateHerosectionDto) {}
