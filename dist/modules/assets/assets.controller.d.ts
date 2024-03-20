import { AssetsService } from './assets.service';
import { AssetEntity } from './entities/asset.entity';
import { TransferExtrinsicDto } from './dto/transfer-extrinsic.dto';
export declare class AssetsController {
    private readonly assetsService;
    constructor(assetsService: AssetsService);
    getAssets(): Promise<AssetEntity[]>;
    getAssetBalanceByAccount(asset_id: number, keypair: string): Promise<number>;
    transferExtrinsic(data: TransferExtrinsicDto): Promise<any>;
}
