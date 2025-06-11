import { Test, TestingModule } from '@nestjs/testing';
import { HerosectionController } from './herosection.controller';
import { HerosectionService } from './herosection.service';

describe('HerosectionController', () => {
  let controller: HerosectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HerosectionController],
      providers: [HerosectionService],
    }).compile();

    controller = module.get<HerosectionController>(HerosectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
