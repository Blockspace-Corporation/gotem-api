import { Injectable, Logger } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { hexToString } from '@polkadot/util';
import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
import { ExecuteExtrinsicsStatusEntity } from './entities/execute-extrinsincs-status.entity';

@Injectable()
export class ExtrinsicService {
  private wsProviderEndpoint = process.env.WS_PROVIDER;
  private wsProvider = new WsProvider(this.wsProviderEndpoint);
  private api = ApiPromise.create({ provider: this.wsProvider });

  public async executeExtrinsics(extrinsics: ExecuteExtrinsicsDto): Promise<any> {
    try {
      const api = await this.api;
      const executeExtrinsic = api.tx(extrinsics.signedExtrincs);

      const sendTransaction = await new Promise<ExecuteExtrinsicsStatusEntity>((resolve, reject) => {
        executeExtrinsic.send(async result => {
          let message: ExecuteExtrinsicsStatusEntity = {
            message: "",
            isError: true
          };

          if (result.isError) {
            message = {
              message: "Something went wrong!",
              isError: true
            };
            resolve(message);
          }

          if (result.dispatchError) {
            if (result.dispatchError.isModule) {
              const decoded = api.registry.findMetaError(result.dispatchError.asModule);
              const { docs, name, section } = decoded;

              message = {
                message: "Dispatch Error: " + name,
                isError: true
              };
              reject(message);
            }
          }

          if (result.status.isInBlock) {

          }

          if (result.status.isFinalized) {
            message = {
              message: "Execution Complete",
              isError: false
            };
            resolve(message);
          }
        }).catch(error => {
          reject(error);
        });
      });

      return sendTransaction;
    } catch (error) {
      throw error;
    }
  }
}
