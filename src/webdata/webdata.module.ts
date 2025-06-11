import { Module } from '@nestjs/common';
import { WebdataService } from './webdata.service';
import { WebdataController } from './webdata.controller';

@Module({
  controllers: [WebdataController],
  providers: [WebdataService],
})
export class WebdataModule {}
