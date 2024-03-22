import { Module } from '@nestjs/common';
import { ExtrinsicModule } from '../extrinsic/extrinsic.module';
import { SmartContractEvidenceService } from './smart-contract-evidence.service';
import { SmartContractEvidenceController } from './smart-contract-evidence.controller';

@Module({
  controllers: [SmartContractEvidenceController],
  imports: [ExtrinsicModule],
  providers: [SmartContractEvidenceService],
})
export class SmartContractEvidenceModule {}
