import { Module } from '@nestjs/common';
import { SmartContractCaseService } from './smart-contract-case.service';
import { SmartContractCaseController } from './smart-contract-case.controller';

@Module({
  controllers: [SmartContractCaseController],
  providers: [SmartContractCaseService],
})
export class SmartContractCaseModule {}
