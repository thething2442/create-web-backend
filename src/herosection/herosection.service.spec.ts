import { Test, TestingModule } from '@nestjs/testing';
import { HerosectionService } from './herosection.service';

describe('HerosectionService', () => {
  let service: HerosectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HerosectionService],
    }).compile();

    service = module.get<HerosectionService>(HerosectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
