import { Controller, Get, Post, Body, Query, Param, Delete, Put, HttpException, HttpStatus, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiResponse, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { InvestigatorService } from './investigator.service';
import { RegisterInvestigatorDto } from './dto/register-investigator.dto';
import { InvestigatorEntity } from './entities/investigator.entity';
import { EmailService } from './email/email.service';
import { FileUploadService } from './file-upload/file-upload.service';

@Controller('api/investigator')
@ApiTags('Investigator')
export class InvestigatorController {
  constructor(
    private readonly investigatorService: InvestigatorService,
    private readonly emailService: EmailService,
    private readonly fileUploadService: FileUploadService
  ) { }

  @Post('/register')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  async createAndSendOtp(
    @Body() investigator: RegisterInvestigatorDto
  ): Promise<InvestigatorEntity> {
    try {
      const createdInvestigator = await this.investigatorService.create(investigator);

      // const otp = Math.floor(100000 + Math.random() * 900000).toString();
      // await this.emailService.sendOtp(createdInvestigator.email, otp);

      return createdInvestigator;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/upload')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    try {
      const fileUrl = await this.fileUploadService.uploadFile(file);

      return { url: fileUrl };
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}