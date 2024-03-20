import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { SmartContractEvidenceService } from './smart-contract-evidence.service';
import { SetEvidenceNftDto } from './dto/set-evidence-nft.dto';
import { EvidenceNftEntity } from './entities/evidence-nft.entity';

@Controller('api/smart-contract/evidence')
@ApiTags('smart contract - evidence')
export class SmartContractEvidenceController {
  constructor(
    private readonly smartContractEvidenceService: SmartContractEvidenceService
  ) { }

  @Get('/get/all-evidence')
  getAllEvidence(): Promise<EvidenceNftEntity[]> {
    return this.smartContractEvidenceService.getAllEvidence();
  }

  @Get('/get/evidence/by-id/:id')
  getEvidenceById(
    @Param('id') id: number
  ): Promise<EvidenceNftEntity> {
    return this.smartContractEvidenceService.getEvidenceById(id);
  }

  @Post('/extrinsic/set-evidence')
  @ApiCreatedResponse({
    description: 'Set evidence extrinsic created succesfully',
    type: SetEvidenceNftDto,
    isArray: false,
  })
  setEvidenceExtrinsic(@Body() data: SetEvidenceNftDto): Promise<any> {
    return this.smartContractEvidenceService.setEvidenceExtrinsic(data);
  }
}
