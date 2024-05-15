import { Controller, Get, Post, Body, Query, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { InvestigatorService } from './investigator.service';
import { Investigator } from './entities/investigator.entity';

import { EmailService } from './email/email.service';

@Controller('investigator')
export class InvestigatorController {
  constructor(
    private readonly investigatorService: InvestigatorService,
    private readonly emailService: EmailService
  ) {}

  @Get()
  async findAll(): Promise<Investigator[]> {
    return this.investigatorService.findAll();
  }

  @Get(':investigator_id')
  async findById(@Param('investigator_id') investigator_id: string): Promise<Investigator> {
    return this.investigatorService.findById(parseInt(investigator_id, 10));
  }

  @Post()
  async createAndSendOtp(
    @Body() investigator: Investigator,
    @Body('email') email: string,
  ): Promise<Investigator> {
    try {
      // Create investigator
      const createdInvestigator = await this.investigatorService.create(investigator);
      
      // Generate and send OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      await this.emailService.sendOtp(email, otp);

      return createdInvestigator;
    } catch (error) {
      throw new HttpException('Failed to create investigator and send OTP', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async updateInvestigator(
    @Param('id') id: number,
    @Query() updateFields: Partial<Investigator>,
  ): Promise<Investigator | undefined> {
    return this.investigatorService.updateInvestigator(id, updateFields);
  }

  @Delete(':investigator_id')
  async delete(@Param('investigator_id') investigator_id): Promise<void> {
    return this.investigatorService.delete(parseInt(investigator_id, 10));
  }
}
