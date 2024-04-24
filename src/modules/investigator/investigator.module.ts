import { Module } from '@nestjs/common';
import { InvestigatorService } from './investigator.service';
import { InvestigatorController } from './investigator.controller';

@Module({
  controllers: [InvestigatorController],
  providers: [InvestigatorService],
})
export class InvestigatorModule {}
