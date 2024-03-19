import { Module } from '@nestjs/common';
import { SmartContractEvidenceService } from './smart-contract-evidence.service';
import { SmartContractEvidenceController } from './smart-contract-evidence.controller';

@Module({
  controllers: [SmartContractEvidenceController],
  providers: [SmartContractEvidenceService],
})
export class SmartContractEvidenceModule {}
