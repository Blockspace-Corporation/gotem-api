import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractVoteController } from './smart-contract-vote.controller';
import { SmartContractVoteService } from './smart-contract-vote.service';

describe('SmartContractVoteController', () => {
  let controller: SmartContractVoteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartContractVoteController],
      providers: [SmartContractVoteService],
    }).compile();

    controller = module.get<SmartContractVoteController>(SmartContractVoteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
