import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractEvidenceService } from './smart-contract-evidence.service';

describe('SmartContractEvidenceService', () => {
  let service: SmartContractEvidenceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartContractEvidenceService],
    }).compile();

    service = module.get<SmartContractEvidenceService>(SmartContractEvidenceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
