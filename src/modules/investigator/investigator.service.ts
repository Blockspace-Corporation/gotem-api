import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterInvestigatorDto } from './dto/register-investigator.dto';
import { InvestigatorEntity } from './entities/investigator.entity';

@Injectable()
export class InvestigatorService {

  constructor(
    @InjectRepository(InvestigatorEntity)
    private readonly investigatorRepository: Repository<InvestigatorEntity>,
  ) {}

  async create(investigator: RegisterInvestigatorDto): Promise<InvestigatorEntity> {
    return this.investigatorRepository.save(investigator);
  }
}