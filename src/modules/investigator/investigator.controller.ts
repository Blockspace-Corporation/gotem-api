import { Controller, Get, Post, Body, Query, Param, Delete, Put } from '@nestjs/common';
import { InvestigatorService } from './investigator.service';
import { Investigator } from './entities/investigator.entity';

@Controller('investigator')
export class InvestigatorController {
  constructor(private readonly investigatorService: InvestigatorService) {}

  @Get()
  async findAll(): Promise<Investigator[]> {
    return this.investigatorService.findAll();
  }

  @Get(':investigator_id')
  async findById(@Param('investigator_id') investigator_id: string): Promise<Investigator> {
    return this.investigatorService.findById(parseInt(investigator_id, 10));
  }

  @Post()
  async create(@Body() investigator: Investigator): Promise<Investigator> {
    return this.investigatorService.create(investigator);
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
