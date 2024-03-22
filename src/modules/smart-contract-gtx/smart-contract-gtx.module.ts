import { Module } from '@nestjs/common';
import { SmartContractGtxService } from './smart-contract-gtx.service';
import { SmartContractGtxController } from './smart-contract-gtx.controller';

@Module({
  controllers: [SmartContractGtxController],
  providers: [SmartContractGtxService],
})
export class SmartContractGtxModule {}
