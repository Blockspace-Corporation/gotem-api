import { AssetMetadataEntity } from "./asset-metadata.entity";
export declare class AssetEntity {
    id: number;
    accounts: number;
    admin: string;
    approvals: string;
    deposit: number;
    freezer: string;
    isSufficient: boolean;
    issuer: string;
    minBalance: number;
    owner: string;
    status: string;
    sufficients: number;
    supply: number;
    metadata: AssetMetadataEntity;
}
