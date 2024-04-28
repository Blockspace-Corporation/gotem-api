import { Injectable } from '@nestjs/common';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { UpdateInvestigatorDto } from './dto/update-investigator.dto';
import { Investigator } from './entities/investigator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvestigatorService {
  constructor(
    @InjectRepository(Investigator)
    private investigatorRepository: Repository<Investigator>,
  ) {}
  
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
