import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestigatorService } from './investigator.service';
import { InvestigatorController } from './investigator.controller';
import { InvestigatorEntity } from './entities/investigator.entity';
import { EmailService } from './email/email.service';
import { FileUploadService } from './file-upload/file-upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvestigatorEntity])],
  controllers: [InvestigatorController],
  providers: [InvestigatorService, EmailService, FileUploadService],
  exports: [TypeOrmModule]
})
export class InvestigatorModule {}
