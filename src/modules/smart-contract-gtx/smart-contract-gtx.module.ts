import { Module } from '@nestjs/common';
import { ExtrinsicModule } from '../extrinsic/extrinsic.module';
import { SmartContractGtxService } from './smart-contract-gtx.service';
import { SmartContractGtxController } from './smart-contract-gtx.controller';

@Module({
  controllers: [SmartContractGtxController],
  imports: [ExtrinsicModule],
  providers: [SmartContractGtxService],
})
export class SmartContractGtxModule { }
