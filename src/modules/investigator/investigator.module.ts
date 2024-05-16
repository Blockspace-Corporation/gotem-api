import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestigatorService } from './investigator.service';
import { InvestigatorController } from './investigator.controller';
import { InvestigatorEntity } from './entities/investigator.entity';
import { EmailService } from './email/email.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvestigatorEntity])],
  controllers: [InvestigatorController],
  providers: [InvestigatorService, EmailService],
  exports: [TypeOrmModule]
})
export class InvestigatorModule {}
