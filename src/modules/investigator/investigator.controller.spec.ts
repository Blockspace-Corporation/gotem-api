import { Test, TestingModule } from '@nestjs/testing';
import { InvestigatorController } from './investigator.controller';
import { InvestigatorService } from './investigator.service';

describe('InvestigatorController', () => {
  let controller: InvestigatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestigatorController],
      providers: [InvestigatorService],
    }).compile();

    controller = module.get<InvestigatorController>(InvestigatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
