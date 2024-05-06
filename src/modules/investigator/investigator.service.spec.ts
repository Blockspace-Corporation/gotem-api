import { Test, TestingModule } from '@nestjs/testing';
import { InvestigatorService } from './investigator.service';

describe('InvestigatorService', () => {
  let service: InvestigatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestigatorService],
    }).compile();

    service = module.get<InvestigatorService>(InvestigatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
