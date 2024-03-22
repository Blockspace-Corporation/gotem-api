import { Injectable } from '@nestjs/common';
import { ExtrinsicService } from '../extrinsic/extrinsic.service';
import { SetCaseNftDto } from './dto/set-case-nft.dto';
import { UpdateCaseNftDto } from './dto/update-case-nft.dto';
import { CaseNftEntity } from './entities/case-nft.entity';

@Injectable()
export class SmartContractCaseService {
  private metadata: any = require("./../../../contract/case.json");
  private contractAddress = process.env.CASE_CONTRACT_ADDRESS;

  constructor(
    private readonly extrinsicService: ExtrinsicService
  ) { }

  public async getAllCase(): Promise<CaseNftEntity[]> {
    let caseNfts: CaseNftEntity[] = [];
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getAllCase"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            caseNfts.push({
              caseId: data[i].caseId,
              title: data[i].title,
              description: data[i].description,
              category: data[i].category,
              owner: data[i].owner,
              bounty: data[i].bounty,
              file: data[i].file,
              status: data[i].status
            })
          }
        }
      }
    }

    return caseNfts;
  }

  public async getCaseById(id: number): Promise<CaseNftEntity> {
    let caseNft: CaseNftEntity = undefined;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getCaseById",
      id
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        caseNft = {
          caseId: data.caseId,
          title: data.title,
          description: data.description,
          category: data.category,
          owner: data.owner,
          bounty: data.bounty,
          file: data.file,
          status: data.status
        };
      }
    }

    return caseNft;
  }

  public async setCaseExtrinsic(data: SetCaseNftDto): Promise<any> {
    try {
      const setCaseExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "setCase",
        data
      );

      return setCaseExtrinsic;
    } catch (error) {
      throw error;
    }
  }

  public async updateCaseExtrinsic(id: number, data: UpdateCaseNftDto): Promise<any> {
    try {
      const updateCaseExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "updateCase",
        id,
        data
      );

      return updateCaseExtrinsic;
    } catch (error) {
      throw error;
    }
  }

  public async burnCaseExtrinsic(id: number): Promise<any> {
    try {
      const burnCaseExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "burnCase",
        id
      );

      return burnCaseExtrinsic;
    } catch (error) {
      throw error;
    }
  }
}
