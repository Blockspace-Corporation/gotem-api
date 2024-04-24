import { Injectable } from '@nestjs/common';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { UpdateInvestigatorDto } from './dto/update-investigator.dto';

@Injectable()
export class InvestigatorService {
  create(createInvestigatorDto: CreateInvestigatorDto) {
    return 'This action adds a new investigator';
  }

  findAll() {
    return `This action returns all investigator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} investigator`;
  }

  update(id: number, updateInvestigatorDto: UpdateInvestigatorDto) {
    return `This action updates a #${id} investigator`;
  }

  remove(id: number) {
    return `This action removes a #${id} investigator`;
  }
}
