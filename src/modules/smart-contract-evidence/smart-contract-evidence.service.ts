import { Injectable } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { ContractPromise } from '@polkadot/api-contract';
import { SetEvidenceNftDto } from './dto/set-evidence-nft.dto';
import { UpdateEvidenceNftDto } from './dto/update-evidence-nft.dto';
import { EvidenceNftEntity } from './entities/evidence-nft.entity';

@Injectable()
export class SmartContractEvidenceService {
  private wsProviderEndpoint = process.env.WS_PROVIDER;
  private wsProvider = new WsProvider(this.wsProviderEndpoint);
  private api = ApiPromise.create({ provider: this.wsProvider });

  private metadata: any = require("./../../../contract/evidence.json");
  private contractAddress = process.env.EVIDENCE_CONTRACT_ADDRESS;

  public async getAllEvidence(): Promise<EvidenceNftEntity[]> {
    let evidenceNfts: EvidenceNftEntity[] = [];

    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['getAllEvidence'](this.contractAddress, options));
    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            evidenceNfts.push({
              evidenceId: data[i].evidenceId,
              description: data[i].description,
              owner: data[i].owner,
              file: data[i].file,
              caseId: data[i].caseId,
              caseTitle: data[i].caseTitle,
              status: data[i].status
            })
          }
        }
      }
    }

    return evidenceNfts;
  }

  public async getEvidenceById(id: number): Promise<EvidenceNftEntity> {
    let evidenceNft: EvidenceNftEntity = undefined;

    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['getEvidenceById'](this.contractAddress, options, id));
    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        evidenceNft = {
          evidenceId: data.evidenceId,
          description: data.description,
          owner: data.owner,
          file: data.file,
          caseId: data.caseId,
          caseTitle: data.caseTitle,
          status: data.status
        };
      }
    }

    return evidenceNft;
  }

  public async getAllEvidenceByCaseId(caseId: number): Promise<EvidenceNftEntity[]> {
    let evidenceNfts: EvidenceNftEntity[] = [];

    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
    };

    const { output } = (await contract.query['evidenceByCaseId'](this.contractAddress, options, caseId));
    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            evidenceNfts.push({
              evidenceId: data[i].evidenceId,
              description: data[i].description,
              owner: data[i].owner,
              file: data[i].file,
              caseId: data[i].caseId,
              caseTitle: data[i].caseTitle,
              status: data[i].status
            })
          }
        }
      }
    }

    return evidenceNfts;
  }

  public async setEvidenceExtrinsic(data: SetEvidenceNftDto): Promise<any> {
    try {
      const api = await this.api;
      const contract = new ContractPromise(api, this.metadata, this.contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', {
          refTime: 300000000000,
          proofSize: 500000,
        }),
      };

      const setEvidenceExtrinsic = contract.tx['setEvidence'](
        options, data
      );

      return setEvidenceExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async updateEvidenceExtrinsic(id: number, data: UpdateEvidenceNftDto): Promise<any> {
    try {
      const api = await this.api;
      const contract = new ContractPromise(api, this.metadata, this.contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', {
          refTime: 300000000000,
          proofSize: 500000,
        }),
      };

      const updateEvidenceExtrinsic = contract.tx['updateEvidence'](
        options, id, data
      );

      return updateEvidenceExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async burnEvidenceExtrinsic(id: number): Promise<any> {
    try {
      const api = await this.api;
      const contract = new ContractPromise(api, this.metadata, this.contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', {
          refTime: 300000000000,
          proofSize: 500000,
        }),
      };

      const burnEvidenceExtrinsic = contract.tx['burnEvidence'](
        options, id
      );

      return burnEvidenceExtrinsic;
    } catch (error) {
      return error;
    }
  }
}
