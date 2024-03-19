import { Test, TestingModule } from '@nestjs/testing';
import { ExtrinsicController } from './extrinsic.controller';
import { ExtrinsicService } from './extrinsic.service';

describe('ExtrinsicController', () => {
  let controller: ExtrinsicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExtrinsicController],
      providers: [ExtrinsicService],
    }).compile();

    controller = module.get<ExtrinsicController>(ExtrinsicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
