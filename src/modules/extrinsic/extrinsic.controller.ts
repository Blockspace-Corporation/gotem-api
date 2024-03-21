import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';
import { ExtrinsicService } from './extrinsic.service';
import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';

@Controller('api/extrinsic')
@ApiTags('Extrinsic')
export class ExtrinsicController {
  constructor(
    private readonly extrinsicService: ExtrinsicService
  ) { }

  @Post('/execute')
  @ApiResponse({ status: 200, description: 'Executes the signed extrinsics hex value.' })
  @ApiResponse({ status: 500, description: 'Internal server error.' })
  async executeExtrinsics(@Body() data: ExecuteExtrinsicsDto): Promise<any> {
    try {
      return await this.extrinsicService.executeExtrinsics(data);
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error.toString() || 'Internal server error',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
