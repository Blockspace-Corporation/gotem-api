import { AssetEntity } from './entities/asset.entity';
import { TransferExtrinsicDto } from './dto/transfer-extrinsic.dto';
export declare class AssetsService {
    private wsProviderEndpoint;
    private wsProvider;
    private api;
    getAssets(): Promise<AssetEntity[]>;
    getAssetBalanceByAccount(asset_id: number, keypair: string): Promise<number>;
    transferExtrinsic(data: TransferExtrinsicDto): Promise<any>;
}
