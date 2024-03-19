import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { AssetsService } from './assets.service';
import { AssetEntity } from './entities/asset.entity';
import { TransferExtrinsicDto } from './dto/transfer-extrinsic.dto';

@Controller('api/assets')
@ApiTags('assets')
export class AssetsController {
  constructor(
    private readonly assetsService: AssetsService
  ) { }

  @Get('/get/assets')
  getAssets(): Promise<AssetEntity[]> {
    return this.assetsService.getAssets();
  }

  @Get('/get/asset-balance-by-account/:asset_id/:keypair')
  getAssetBalanceByAccount(
    @Param('asset_id') asset_id: number,
    @Param('keypair') keypair: string
  ): Promise<number> {
    return this.assetsService.getAssetBalanceByAccount(asset_id, keypair);
  }

  @Post('/extrinsic/transfer')
  @ApiCreatedResponse({
    description: 'Transfer extrinsic created succesfully',
    type: TransferExtrinsicDto,
    isArray: false,
  })
  transferExtrinsic(@Body() data: TransferExtrinsicDto): Promise<any> {
    return this.assetsService.transferExtrinsic(data);
  }
}
