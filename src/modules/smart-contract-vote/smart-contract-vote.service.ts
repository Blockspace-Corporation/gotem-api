import { Injectable } from '@nestjs/common';
import { ExtrinsicService } from '../extrinsic/extrinsic.service';
import { SetVoterDto } from './dto/set-voter-nft.dto';
import { SetVoteDto } from './dto/set-vote.dto';
import { UpdateVoterDto } from './dto/update-voter-nft.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VoterEntity } from './entities/voter.entity';
import { VoteEntity } from './entities/vote.entity';

@Injectable()
export class SmartContractVoteService {
  private metadata: any = require("./../../../contract/vote.json");
  private contractAddress = process.env.VOTE_CONTRACT_ADDRESS;

  constructor(
    private readonly extrinsicService: ExtrinsicService
  ) { }

  public async getAllVoter(): Promise<VoterEntity[]> {
    let voters: VoterEntity[] = [];
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getAllVoter"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            voters.push({
              voterId: data[i].voterId,
              caseId: data[i].caseId,
              voter: data[i].voter,
              amountHold: parseFloat(String(data[i].amountHold).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
              voteCredit: parseFloat(String(data[i].voteCredit).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
            })
          }
        }
      }
    }

    return voters;
  }

  public async getVoterById(id: number): Promise<VoterEntity> {
    let voter: VoterEntity = undefined;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getVoterById",
      id
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        voter = {
          voterId: data.voterId,
          caseId: data.caseId,
          voter: data.voter,
          amountHold: parseFloat(String(data.amountHold).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
          voteCredit: parseFloat(String(data.voteCredit).split(',').join('')) / (10 ** parseInt(process.env.DECIMALS)),
        };
      }
    }

    return voter;
  }

  public async setVoterExtrinsic(data: SetVoterDto): Promise<any> {
    try {
      const setVoterExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "setVoter",
        data
      );

      return setVoterExtrinsic
    } catch (error) {
      return error;
    }
  }

  public async updateVoterExtrinsic(id: number, data: UpdateVoterDto): Promise<any> {
    try {
      const updateVoterExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "updateVoter",
        id,
        data
      );

      return updateVoterExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async burnVoterExtrinsic(id: number): Promise<any> {
    try {
      const burnVoterExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "burnVoter",
        id
      );

      return burnVoterExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async getAllVotes(): Promise<VoteEntity[]> {
    let votes: VoteEntity[] = [];
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getAllVotes"
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            votes.push({
              voteId: data[i].voteId,
              caseId: data[i].caseId,
              evidenceId: data[i].evidenceId,
              voter: data[i].voter,
              yesCredit: data[i].yesCredit,
              noCredit: data[i].noCredit,
              destributionReward: data[i].destributionReward
            })
          }
        }
      }
    }

    return votes;
  }

  public async getVoteById(id: number): Promise<VoteEntity> {
    let vote: VoteEntity = undefined;
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "getVoteById",
      id
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        vote = {
          voteId: data.voteId,
          caseId: data.caseId,
          evidenceId: data.evidenceId,
          voter: data.voter,
          yesCredit: data.yesCredit,
          noCredit: data.noCredit,
          destributionReward: data.destributionReward
        };
      }
    }

    return vote;
  }

  public async getAllVotesByEvidenceId(evidenceId: number): Promise<VoteEntity[]> {
    let votes: VoteEntity[] = [];
    let output = await this.extrinsicService.createContractQuery(
      this.metadata,
      this.contractAddress,
      "votesByEvidenceId",
      evidenceId
    );

    if (output != null || output != undefined) {
      let data = JSON.parse(JSON.stringify(output))["ok"];
      if (data != null) {
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            votes.push({
              voteId: data[i].voteId,
              caseId: data[i].caseId,
              evidenceId: data[i].evidenceId,
              voter: data[i].voter,
              yesCredit: data[i].yesCredit,
              noCredit: data[i].noCredit,
              destributionReward: data[i].destributionReward
            })
          }
        }
      }
    }

    return votes;
  }

  public async setVoteExtrinsic(data: SetVoteDto): Promise<any> {
    try {
      const setVoterExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "setVote",
        data
      );

      return setVoterExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async updateVoteExtrinsic(id: number, data: UpdateVoteDto): Promise<any> {
    try {
      const updateVoteExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "updateVote",
        id,
        data
      );

      return updateVoteExtrinsic;
    } catch (error) {
      return error;
    }
  }

  public async burnVoteExtrinsic(id: number): Promise<any> {
    try {
      const burnVoteExtrinsic = await this.extrinsicService.createContractTransaction(
        this.metadata,
        this.contractAddress,
        "burnVote",
        id,
      );

      return burnVoteExtrinsic;
    } catch (error) {
      return error;
    }
  }
}
