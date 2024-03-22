import { Injectable } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';

@Injectable()
export class SmartContractGtxService {
  private wsProviderEndpoint = process.env.WS_PROVIDER;
  private wsProvider = new WsProvider(this.wsProviderEndpoint);
  private api = ApiPromise.create({ provider: this.wsProvider });

  private metadata: any = require("./../../../contract/gtx.json");
  private contractAddress = process.env.GOTEM_TOKEN_CONTRACT_ADDRESS;

  public async approveExtrinsic(): Promise<void> {

  }

  public async burnExtrinsic(): Promise<void> {

  }

  public async changeOwnerExtrinsic(): Promise<void> {

  }

  public async mintExtrinsic(): Promise<void> {

  }

  public async transferExtrinsic(): Promise<void> {

  }

  public async transferFromExtrinsic(): Promise<void> {

  }

  public async getAllowance(owner: string, spender: string): Promise<void> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['allowance'](this.contractAddress,
      options, owner, spender
    ));

    if (output != null || output != undefined) {

    }
  }

  public async getBalanceOf(owner: string): Promise<void> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['balanceOf'](this.contractAddress,
      options, owner
    ));

    if (output != null || output != undefined) {

    }
  }

  public async getDecimals(): Promise<void> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['getDecimals'](this.contractAddress, options));
    if (output != null || output != undefined) {

    }
  }

  public async getName(): Promise<void> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['getName'](this.contractAddress, options));
    if (output != null || output != undefined) {

    }
  }

  public async getSymbol(): Promise<void> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['getSymbol'](this.contractAddress, options));
    if (output != null || output != undefined) {

    }
  }

  public async getMetadata(): Promise<void> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['metadata'](this.contractAddress, options));
    if (output != null || output != undefined) {

    }
  }

  public async getTotalSupply(): Promise<void> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['totalSupply'](this.contractAddress, options));
    if (output != null || output != undefined) {

    }
  }
}
