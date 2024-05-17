import { Module } from '@nestjs/common';
import { ExtrinsicModule } from '../extrinsic/extrinsic.module';
import { SmartContractCaseService } from './smart-contract-case.service';
import { SmartContractCaseController } from './smart-contract-case.controller';

@Module({
  controllers: [SmartContractCaseController],
  imports: [ExtrinsicModule],
  providers: [SmartContractCaseService],
})
export class SmartContractCaseModule {}
