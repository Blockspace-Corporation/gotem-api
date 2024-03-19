import { Module } from '@nestjs/common';
import { SmartContractVoteService } from './smart-contract-vote.service';
import { SmartContractVoteController } from './smart-contract-vote.controller';

@Module({
  controllers: [SmartContractVoteController],
  providers: [SmartContractVoteService],
})
export class SmartContractVoteModule {}
