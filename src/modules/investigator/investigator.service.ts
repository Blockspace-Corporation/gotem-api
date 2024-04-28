import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investigator } from './entities/investigator.entity';
import { CreateInvestigatorDto } from './dto/create-investigator.dto';
import { UpdateInvestigatorDto } from './dto/update-investigator.dto';

@Injectable()
export class InvestigatorService {

  constructor(
    @InjectRepository(Investigator)
    private investigatorsRepository: Repository<Investigator>,
  ) {}
  
  // create(createInvestigatorDto: CreateInvestigatorDto) {
  //   return 'This action adds a new investigator';
  // }

  findAll(): Promise<Investigator[]> {
    return this.investigatorsRepository.find();
  }

  findOne(id: number): Promise<Investigator | null> {
    return this.investigatorsRepository.findOneBy({id});
  }

  // update(id: number, updateInvestigatorDto: UpdateInvestigatorDto) {
  //   return `This action updates a #${id} investigator`;
  // }

  async remove(id: number): Promise<void> {
    await this.investigatorsRepository.delete(id);
  }
}
