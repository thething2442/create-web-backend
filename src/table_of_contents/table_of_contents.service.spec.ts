import { Test, TestingModule } from '@nestjs/testing';
import { TableOfContentsService } from './table_of_contents.service';

describe('TableOfContentsService', () => {
  let service: TableOfContentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TableOfContentsService],
    }).compile();

    service = module.get<TableOfContentsService>(TableOfContentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
