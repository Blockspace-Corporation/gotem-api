import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { ExtrinsicService } from './extrinsic.service';
import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
import { ExecuteExtrinsicsStatusEntity } from './entities/execute-extrinsincs-status.entity';

@Controller('api/extrinsic')
@ApiTags('Extrinsic')
export class ExtrinsicController {
  constructor(
    private readonly extrinsicService: ExtrinsicService
  ) { }

  @Post('/extrinsics/execute')
  @ApiCreatedResponse({
    description: 'Dex extrinsics executed succesfully',
    type: ExecuteExtrinsicsStatusEntity,
    isArray: false,
  })
  executeExtrinsics(@Body() data: ExecuteExtrinsicsDto): Promise<ExecuteExtrinsicsStatusEntity> {
    return this.extrinsicService.executeExtrinsics(data);
  }
}
