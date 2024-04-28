import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvestigatorService } from './investigator.service';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { UpdateInvestigatorDto } from './dto/update-investigator.dto';

@Controller('investigator')
export class InvestigatorController {
  constructor(private readonly investigatorService: InvestigatorService) {}

  @Post()
  create(@Body() createInvestigatorDto: CreateInvestigatorDto) {
    return this.investigatorService.create(createInvestigatorDto);
  }

  @Get()
  findAll() {
    return this.investigatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investigatorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvestigatorDto: UpdateInvestigatorDto) {
    return this.investigatorService.update(+id, updateInvestigatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investigatorService.remove(+id);
  }
}
