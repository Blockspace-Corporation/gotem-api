import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractVoteService } from './smart-contract-vote.service';

describe('SmartContractVoteService', () => {
  let service: SmartContractVoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmartContractVoteService],
    }).compile();

    service = module.get<SmartContractVoteService>(SmartContractVoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
