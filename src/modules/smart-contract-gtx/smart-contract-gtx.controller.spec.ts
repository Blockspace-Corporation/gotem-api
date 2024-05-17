import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractGtxController } from './smart-contract-gtx.controller';
import { SmartContractGtxService } from './smart-contract-gtx.service';

describe('SmartContractGtxController', () => {
  let controller: SmartContractGtxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartContractGtxController],
      providers: [SmartContractGtxService],
    }).compile();

    controller = module.get<SmartContractGtxController>(SmartContractGtxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
