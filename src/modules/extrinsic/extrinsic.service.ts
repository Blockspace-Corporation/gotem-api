import { Injectable } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
import { ExecuteExtrinsicsStatusEntity } from './entities/execute-extrinsincs-status.entity';

@Injectable()
export class ExtrinsicService {
  private wsProviderEndpoint = process.env.WS_PROVIDER;
  private wsProvider = new WsProvider(this.wsProviderEndpoint);
  private api = ApiPromise.create({ provider: this.wsProvider });

  public async executeExtrinsics(extrinsics: ExecuteExtrinsicsDto): Promise<ExecuteExtrinsicsStatusEntity> {
    const api = await this.api;

    return new Promise<ExecuteExtrinsicsStatusEntity>((resolve, reject) => {
      const executeExtrinsic = api.tx(extrinsics.signedExtrincs);
      executeExtrinsic.send().then((result: any) => {
        if (result.isError) {
          let message: ExecuteExtrinsicsStatusEntity = {
            message: "Something's went wrong!",
            isError: true
          }
          resolve(message);
        }

        if (result.dispatchError) {
          if (result.dispatchError.isModule) {
            const decoded = api.registry.findMetaError(result.dispatchError.asModule);
            const { docs, name, section } = decoded;

            let message: ExecuteExtrinsicsStatusEntity = {
              message: "Dispatch Error: " + name,
              isError: true
            }
            resolve(message);
          }
        }

        if (result.status.isInBlock) {

        }

        if (result.status.isFinalized) {
          let message: ExecuteExtrinsicsStatusEntity = {
            message: "Execution Complete",
            isError: false
          }
          resolve(message);
        }
      }).catch((error: any) => {
        let message: ExecuteExtrinsicsStatusEntity = {
          message: error,
          isError: true
        }
        reject(message);
      });
    });
  }
}
