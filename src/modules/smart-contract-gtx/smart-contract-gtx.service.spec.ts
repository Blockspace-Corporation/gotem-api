import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractGtxService } from './smart-contract-gtx.service';

describe('SmartContractGtxService', () => {
  let service: SmartContractGtxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartContractGtxService],
    }).compile();

    service = module.get<SmartContractGtxService>(SmartContractGtxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
