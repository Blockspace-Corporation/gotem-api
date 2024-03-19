import { Test, TestingModule } from '@nestjs/testing';
import { ExtrinsicService } from './extrinsic.service';

describe('ExtrinsicService', () => {
  let service: ExtrinsicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExtrinsicService],
    }).compile();

    service = module.get<ExtrinsicService>(ExtrinsicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
