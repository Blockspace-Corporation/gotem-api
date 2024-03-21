import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
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

  @Get('/get/all-evidence/by-case-id/:case_id')
  getAllEvidenceByCaseId(
    @Param('case_id') case_id: number
  ): Promise<EvidenceNftEntity[]> {
    return this.smartContractEvidenceService.getAllEvidenceByCaseId(case_id);
  }

  @Post('/extrinsic/set-evidence')
  @ApiCreatedResponse({
    description: 'Set evidence extrinsic created succesfully',
    type: SetEvidenceNftDto,
    isArray: false,
  })
  async setEvidenceExtrinsic(@Body() data: SetEvidenceNftDto): Promise<any> {
    try {
      return await this.smartContractEvidenceService.setEvidenceExtrinsic(data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
