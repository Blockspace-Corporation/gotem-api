import { Injectable, Logger } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
import { ExecuteExtrinsicsStatusEntity } from './entities/execute-extrinsincs-status.entity';

@Injectable()
export class ExtrinsicService {
  private wsProviderEndpoint = process.env.WS_PROVIDER;
  private wsProvider = new WsProvider(this.wsProviderEndpoint);
  private api = ApiPromise.create({ provider: this.wsProvider });

  public async createContractQuery(
    metadata: any,
    contractAddress: string,
    messageName: string,
    ...params: any[]
  ): Promise<any> {
    const api = await this.api;
    const contract = new ContractPromise(api, metadata, contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query[messageName](
      contractAddress,
      options,
      ...params
    ));

    return output;
  }

  public async createContractTransaction(
    metadata: any,
    contractAddress: string,
    messageName: string,
    ...params: any[]
  ): Promise<any> {
    try {
      const api = await this.api;
      const contract = new ContractPromise(api, metadata, contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', {
          refTime: 300000000000,
          proofSize: 500000,
        }),
      };

      const extrinsic = contract.tx[messageName](
        options,
        ...params
      );

      return extrinsic;
    } catch (error) {
      throw error;
    }
  }

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

          if (result.status.isInBlock) { }

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
