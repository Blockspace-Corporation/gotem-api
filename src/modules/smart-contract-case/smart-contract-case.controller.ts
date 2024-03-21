import { Controller, Get, Post, Body, Put, Param, Delete, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { SmartContractCaseService } from './smart-contract-case.service';
import { SetCaseNftDto } from './dto/set-case-nft.dto';
import { UpdateCaseNftDto } from './dto/update-case-nft.dto';
import { CaseNftEntity } from './entities/case-nft.entity';

@Controller('api/smart-contract/case')
@ApiTags('smart contract - case')
export class SmartContractCaseController {
  constructor(
    private readonly smartContractCaseService: SmartContractCaseService
  ) { }

  @Get('/get/all-case')
  @ApiResponse({ status: 200, description: 'Returns an array of records.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getAllCase(): Promise<CaseNftEntity[]> {
    return await this.smartContractCaseService.getAllCase();
  }

  @Get('/get/case/by-id/:id')
  @ApiResponse({ status: 200, description: 'Returns the current record.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async getCaseById(@Param('id') id: number): Promise<CaseNftEntity> {
    return await this.smartContractCaseService.getCaseById(id);
  }

  @Post('/extrinsic/set-case')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
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

  @Put('/extrinsic/update-case/:id')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async updateCaseExtrinsic(
    @Param('id') id: number,
    @Body() data: UpdateCaseNftDto
  ): Promise<any> {
    try {
      return await this.smartContractCaseService.updateCaseExtrinsic(id, data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete('/extrinsic/burn-case/:id')
  @ApiResponse({ status: 200, description: 'Returns the created unsigned extrinsic hex value.' })
  @ApiResponse({ status: 404, description: 'Record not found.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async burnCaseExtrinsic(@Param('id') id: number): Promise<any> {
    try {
      return await this.smartContractCaseService.burnCaseExtrinsic(id);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
