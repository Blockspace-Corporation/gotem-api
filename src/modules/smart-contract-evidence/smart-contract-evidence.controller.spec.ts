import { Test, TestingModule } from '@nestjs/testing';
import { SmartContractEvidenceController } from './smart-contract-evidence.controller';
import { SmartContractEvidenceService } from './smart-contract-evidence.service';

describe('SmartContractEvidenceController', () => {
  let controller: SmartContractEvidenceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmartContractEvidenceController],
      providers: [SmartContractEvidenceService],
    }).compile();

    controller = module.get<SmartContractEvidenceController>(SmartContractEvidenceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
