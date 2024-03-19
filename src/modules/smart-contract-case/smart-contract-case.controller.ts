import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  getAllCase(): Promise<CaseNftEntity[]> {
    return this.smartContractCaseService.getAllCase();
  }

  @Get('/get/case/by-id/:id')
  getCaseById(
    @Param('id') id: number
  ): Promise<CaseNftEntity> {
    return this.smartContractCaseService.getCaseById(id);
  }

  @Post('/extrinsic/set-case')
  @ApiCreatedResponse({
    description: 'Set case extrinsic created succesfully',
    type: SetCaseNftDto,
    isArray: false,
  })
  setCaseExtrinsic(@Body() data: SetCaseNftDto): Promise<any> {
    return this.smartContractCaseService.setCaseExtrinsic(data);
  }
}
