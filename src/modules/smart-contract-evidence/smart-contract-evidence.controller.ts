import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { SmartContractEvidenceService } from './smart-contract-evidence.service';
import { SetEvidenceNftDto } from './dto/set-evidence-nft.dto';
import { UpdateEvidenceNftDto } from './dto/update-evidence-nft.dto';
import { EvidenceNftEntity } from './entities/evidence-nft.entity';

@Controller('api/smart-contract/evidence')
@ApiTags('smart contract - evidence')
export class SmartContractEvidenceController {
  constructor(
    private readonly smartContractEvidenceService: SmartContractEvidenceService
  ) { }

  @Get('/get/all-evidence')
  @ApiResponse({ status: 200, description: 'Returns an array of records.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getAllEvidence(): Promise<EvidenceNftEntity[]> {
    return this.smartContractEvidenceService.getAllEvidence();
  }

  @Get('/get/evidence/by-id/:id')
  @ApiResponse({ status: 200, description: 'Returns the current record.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getEvidenceById(@Param('id') id: number): Promise<EvidenceNftEntity> {
    return this.smartContractEvidenceService.getEvidenceById(id);
  }

  @Get('/get/all-evidence/by-case-id/:case_id')
  @ApiResponse({ status: 200, description: 'Returns an array of records.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  getAllEvidenceByCaseId(@Param('case_id') case_id: number): Promise<EvidenceNftEntity[]> {
    return this.smartContractEvidenceService.getAllEvidenceByCaseId(case_id);
  }

  @Post('/extrinsic/set-evidence')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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

  @Put('/extrinsic/update-evidence/:id')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async updateEvidenceExtrinsic(
    @Param('id') id: number,
    @Body() data: UpdateEvidenceNftDto
  ): Promise<any> {
    try {
      return await this.smartContractEvidenceService.updateEvidenceExtrinsic(id, data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/extrinsic/burn-evidence/:id')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async burnEvidenceExtrinsic(@Param('id') id: number): Promise<any> {
    try {
      return await this.smartContractEvidenceService.burnEvidenceExtrinsic(id);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
