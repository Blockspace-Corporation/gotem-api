import { Controller, Get, Post, Body, Query, Param, Delete, Put, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { InvestigatorService } from './investigator.service';
import { RegisterInvestigatorDto } from './dto/register-investigator.dto';
import { InvestigatorEntity } from './entities/investigator.entity';
import { EmailService } from './email/email.service';

@Controller('api/investigator')
@ApiTags('Investigator')
export class InvestigatorController {
  constructor(
    private readonly investigatorService: InvestigatorService,
    private readonly emailService: EmailService
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
      Logger.log(error);
      throw new HttpException('Failed to create investigator and send OTP', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}