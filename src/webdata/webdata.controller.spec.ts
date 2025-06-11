import { Test, TestingModule } from '@nestjs/testing';
import { WebdataController } from './webdata.controller';
import { WebdataService } from './webdata.service';

describe('WebdataController', () => {
  let controller: WebdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebdataController],
      providers: [WebdataService],
    }).compile();

    controller = module.get<WebdataController>(WebdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
