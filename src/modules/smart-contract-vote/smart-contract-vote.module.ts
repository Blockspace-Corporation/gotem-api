import { Module } from '@nestjs/common';
import { ExtrinsicModule } from '../extrinsic/extrinsic.module';
import { SmartContractVoteService } from './smart-contract-vote.service';
import { SmartContractVoteController } from './smart-contract-vote.controller';

@Module({
  controllers: [SmartContractVoteController],
  imports: [ExtrinsicModule],
  providers: [SmartContractVoteService],
})
export class SmartContractVoteModule { }
