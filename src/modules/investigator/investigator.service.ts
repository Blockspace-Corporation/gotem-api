import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investigator } from './entities/investigator.entity';

@Injectable()
export class InvestigatorService {

  constructor(
    @InjectRepository(Investigator)
    private readonly investigatorRepository: Repository<Investigator>,
  ) {}

  async findAll(): Promise<Investigator[]> {
    return this.investigatorRepository.find();
  }

  async findById(investigator_id): Promise<Investigator> {
    return this.investigatorRepository.findOne({ where: { investigator_id } });
  }

  async create(investigator: Investigator): Promise<Investigator> {
    return this.investigatorRepository.save(investigator);
  }

  async updateInvestigator(investigator_id: number, updateFields: Partial<Investigator>): Promise<Investigator | undefined> {
    const investigatorToUpdate = await this.investigatorRepository.findOne({where: { investigator_id }});
    
    if (!investigatorToUpdate) {
      throw new Error(`Investigator with ID ${investigator_id} not found.`);
    }
    
    Object.assign(investigatorToUpdate, updateFields);
    
    return this.investigatorRepository.save(investigatorToUpdate);
  }

  async delete(investigator_id: number): Promise<void> {
    await this.investigatorRepository.delete(investigator_id);
  }
}
