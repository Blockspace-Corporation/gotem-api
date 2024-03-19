import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractCaseService } from './smart-contract-case.service';

describe('SmartContractCaseService', () => {
  let service: SmartContractCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartContractCaseService],
    }).compile();

    service = module.get<SmartContractCaseService>(SmartContractCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
