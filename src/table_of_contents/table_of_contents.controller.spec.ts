import { Test, TestingModule } from '@nestjs/testing';
import { TableOfContentsController } from './table_of_contents.controller';
import { TableOfContentsService } from './table_of_contents.service';

describe('TableOfContentsController', () => {
  let controller: TableOfContentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TableOfContentsController],
      providers: [TableOfContentsService],
    }).compile();

    controller = module.get<TableOfContentsController>(TableOfContentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
