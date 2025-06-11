import { Test, TestingModule } from '@nestjs/testing';
import { WebdataService } from './webdata.service';

describe('WebdataService', () => {
  let service: WebdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebdataService],
    }).compile();

    service = module.get<WebdataService>(WebdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
