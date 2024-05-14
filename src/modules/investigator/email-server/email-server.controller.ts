import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmailServerService } from './email-server.service';
import { CreateEmailServerDto } from './dto/create-email-server.dto';

@Controller('api/email-server')
export class EmailServerController {
  constructor(private readonly emailServerService: EmailServerService) {}

  @Post('test')
  testEMail(@Body() createEmailServerDto: CreateEmailServerDto) {
    return this.emailServerService.sendMailSandBox(createEmailServerDto);
  }
}