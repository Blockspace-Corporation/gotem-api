import { AssetMetadataEntity } from "./asset-metadata.entity";

export class AssetEntity {
    id: number = 0;
    accounts: number = 0;
    admin: string = "";
    approvals: string = "";
    deposit: number = 0;
    freezer: string = "";
    isSufficient: boolean = false;
    issuer: string = "";
    minBalance: number = 0;
    owner: string = "";
    status: string = "";
    sufficients: number = 0;
    supply: number = 0;
    metadata: AssetMetadataEntity = new AssetMetadataEntity()
}