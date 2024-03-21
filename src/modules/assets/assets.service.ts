import { Injectable } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { stringToHex, stringToU8a, u8aToHex, u8aToString, hexToString, hexToBigInt } from '@polkadot/util';
import { AssetEntity } from './entities/asset.entity';
import { AssetMetadataEntity } from './entities/asset-metadata.entity';
import { TransferExtrinsicDto } from './dto/transfer-extrinsic.dto';

@Injectable()
export class AssetsService {
  private wsProviderEndpoint = process.env.WS_PROVIDER;
  private wsProvider = new WsProvider(this.wsProviderEndpoint);
  private api = ApiPromise.create({ provider: this.wsProvider });

  public async getAssets(): Promise<AssetEntity[]> {
    const api = await this.api;

    return new Promise<AssetEntity[]>(async (resolve, reject) => {
      let assets: AssetEntity[] = [];
      let assetMetadatas: AssetMetadataEntity[] = [];

      const getAssetMetadata = await api.query["assets"]["metadata"].entries();
      getAssetMetadata.forEach(([{ args: [id] }, data]) => {
        let jsonData = JSON.parse(data.toString());
        assetMetadatas.push({
          asset_id: parseInt(id.toString()),
          deposit: jsonData.deposit,
          name: hexToString(jsonData.name),
          symbol: hexToString(jsonData.symbol),
          decimals: jsonData.decimals,
          isFrozen: jsonData.isFrozen,
        });
      });

      const getAssets = await api.query["assets"]["asset"].entries();
      getAssets.forEach(([{ args: [id] }, data]) => {
        let jsonData = JSON.parse(data.toString());
        let metadatas = assetMetadatas.filter(d => d.asset_id == parseInt(id.toString()));
        assets.push({
          id: parseInt(id.toString()),
          accounts: jsonData.accounts,
          admin: jsonData.admin,
          approvals: jsonData.approvals,
          deposit: jsonData.deposit,
          freezer: jsonData.freezer,
          isSufficient: jsonData.isSufficient,
          issuer: jsonData.issuer,
          minBalance: jsonData.minBalance,
          owner: jsonData.owner,
          status: jsonData.status,
          sufficients: jsonData.sufficients,
          supply: jsonData.supply,
          metadata: metadatas[0]
        });
      });

      let listAssets = assets.filter(d => d.metadata != undefined);

      resolve(listAssets);
    });
  }

  public async getAssetBalanceByAccount(asset_id: number, keypair: string): Promise<number> {
    const api = await this.api;

    return new Promise<number>(async (resolve, reject) => {
      if (api.query["assets"] != null || undefined) {
        const getAssetByAccount = (await api.query["assets"]["account"](asset_id, keypair));
        if (getAssetByAccount.isEmpty == false) {
          let data: any = getAssetByAccount.toHuman();
          let balance = data.balance;

          let newBalance = parseFloat(String(balance).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS));

          resolve(newBalance)
        }
      }

      resolve(0)
    });
  }

  public async transferExtrinsic(data: TransferExtrinsicDto): Promise<any> {
    const api = await this.api;

    const transferExtrinsic = api.tx["assets"]["transfer"](
      data.id,
      data.target,
      BigInt(data.amount * (10 ** parseInt(process.env.DECIMALS))),
    );

    return transferExtrinsic;
  }
}
