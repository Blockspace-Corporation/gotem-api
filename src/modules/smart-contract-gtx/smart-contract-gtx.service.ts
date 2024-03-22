import { Injectable } from '@nestjs/common';
import { MetadataEntity } from './entities/metadata.entity';
import { ExtrinsicService } from '../extrinsic/extrinsic.service';

@Injectable()
export class SmartContractGtxService {
  private metadata: any = require("./../../../contract/gtx.json");
  private contractAddress = process.env.GOTEM_TOKEN_CONTRACT_ADDRESS;

  constructor(
    private readonly extrinsicService: ExtrinsicService
  ) { }

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

  public async getAllowance(owner: string, spender: string): Promise<number> {
    let allowance: number = 0;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "allowance",
      owner,
      spender
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      allowance = parseFloat(data);
    }

    return allowance;
  }

  public async getBalanceOf(owner: string): Promise<number> {
    let balance: number = 0;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "balanceOf",
      owner
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      balance = parseFloat(data);
    }

    return balance
  }

  public async getDecimals(): Promise<number> {
    let decimal: number = 0;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getDecimals"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      decimal = parseFloat(data);
    }

    return decimal;
  }

  public async getName(): Promise<string> {
    let name: string = "";
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getName"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      name = data;
    }

    return name;
  }

  public async getSymbol(): Promise<string> {
    let symbol: string = "";
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getSymbol"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      symbol = data;
    }

    return symbol;
  }

  public async getMetadata(): Promise<MetadataEntity> {
    let metadata: MetadataEntity = new MetadataEntity() || undefined;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "metadata"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        metadata = {
          totalSupply: data.totalSupply,
          decimals: data.decimals,
          tokenSymbol: data.tokenSymbol,
          tokenName: data.tokenName
        };
      }
    }

    return metadata;
  }

  public async getTotalSupply(): Promise<number> {
    let totalSupply: number = 0;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "totalSupply"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      totalSupply = parseFloat(data);
    }

    return totalSupply;
  }
}
