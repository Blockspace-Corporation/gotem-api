import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestigatorService } from './investigator.service';
import { InvestigatorController } from './investigator.controller';
import { Investigator } from './entities/investigator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Investigator])],
  controllers: [InvestigatorController],
  providers: [InvestigatorService],
  exports: [TypeOrmModule]
})
export class InvestigatorModule {}
