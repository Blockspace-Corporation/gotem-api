import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { SmartContractGtxService } from './smart-contract-gtx.service';
import { MetadataEntity } from './entities/metadata.entity';

@Controller('api/smart-contract/gtx')
@ApiTags('smart contract - gtx')
export class SmartContractGtxController {
  constructor(
    private readonly smartContractGtxService: SmartContractGtxService
  ) { }

  @Get('/get/metadata')
  @ApiResponse({ status: 200, description: 'Returns the ERC720 Metadata.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getMetadata(): Promise<MetadataEntity> {
    return await this.smartContractGtxService.getMetadata();
  }
}