import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { SmartContractCaseService } from './smart-contract-case.service';
import { SetCaseNftDto } from './dto/set-case-nft.dto';
import { CaseNftEntity } from './entities/case-nft.entity';

@Controller('api/smart-contract/case')
@ApiTags('smart contract - case')
export class SmartContractCaseController {
  constructor(
    private readonly smartContractCaseService: SmartContractCaseService
  ) { }

  @Get('/get/all-case')
  async getAllCase(): Promise<CaseNftEntity[]> {
    return await this.smartContractCaseService.getAllCase();
  }

  @Get('/get/case/by-id/:id')
  async getCaseById(
    @Param('id') id: number
  ): Promise<CaseNftEntity> {
    return await this.smartContractCaseService.getCaseById(id);
  }

  @Post('/extrinsic/set-case')
  @ApiCreatedResponse({
    description: 'Set case extrinsic created succesfully',
    type: SetCaseNftDto,
    isArray: false,
  })
  async setCaseExtrinsic(@Body() data: SetCaseNftDto): Promise<any> {
    try {
      return await this.smartContractCaseService.setCaseExtrinsic(data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
