import { Injectable } from '@nestjs/common';
import { ExtrinsicService } from '../extrinsic/extrinsic.service';
import { SetEvidenceNftDto } from './dto/set-evidence-nft.dto';
import { UpdateEvidenceNftDto } from './dto/update-evidence-nft.dto';
import { EvidenceNftEntity } from './entities/evidence-nft.entity';

@Injectable()
export class SmartContractEvidenceService {
  private metadata: any = require("./../../../contract/evidence.json");
  private contractAddress = process.env.EVIDENCE_CONTRACT_ADDRESS;

  constructor(
    private readonly extrinsicService: ExtrinsicService
  ) { }

  public async getAllEvidence(): Promise<EvidenceNftEntity[]> {
    let evidenceNfts: EvidenceNftEntity[] = [];
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getAllEvidence"
    );

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
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getEvidenceById",
      id
    );

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
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "evidenceByCaseId",
      caseId
    );

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
      const setEvidenceExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "setEvidence",
        data
      );

      return setEvidenceExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async updateEvidenceExtrinsic(id: number, data: UpdateEvidenceNftDto): Promise<any> {
    try {
      const updateEvidenceExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "updateEvidence",
        id,
        data
      );

      return updateEvidenceExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async burnEvidenceExtrinsic(id: number): Promise<any> {
    try {
      const burnEvidenceExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "burnEvidence",
        id
      );

      return burnEvidenceExtrinsic;
    } catch (error) {
      return error;
    }
  }
}
