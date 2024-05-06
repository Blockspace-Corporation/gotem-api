import { PartialType } from '@nestjs/swagger';
import { CreateInvestigatorDto } from './create-investigator.dto';

export class UpdateInvestigatorDto extends PartialType(CreateInvestigatorDto) {}
