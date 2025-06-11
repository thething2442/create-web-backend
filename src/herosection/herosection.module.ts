import { Module } from '@nestjs/common';
import { HerosectionService } from './herosection.service';
import { HerosectionController } from './herosection.controller';

@Module({
  controllers: [HerosectionController],
  providers: [HerosectionService],
})
export class HerosectionModule {}
