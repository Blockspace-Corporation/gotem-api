import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractCaseController } from './smart-contract-case.controller';
import { SmartContractCaseService } from './smart-contract-case.service';

describe('SmartContractCaseController', () => {
  let controller: SmartContractCaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartContractCaseController],
      providers: [SmartContractCaseService],
    }).compile();

    controller = module.get<SmartContractCaseController>(SmartContractCaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
