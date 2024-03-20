import { Injectable } from '@nestjs/common';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { stringToHex, stringToU8a, u8aToHex, u8aToString, hexToString, hexToBigInt } from '@polkadot/util';
import { ContractPromise } from '@polkadot/api-contract';
import { SetVoterDto } from './dto/set-voter-nft.dto';
import { SetVoteDto } from './dto/set-vote.dto';
import { VoterEntity } from './entities/voter.entity';
import { VoteEntity } from './entities/vote.entity';

@Injectable()
export class SmartContractVoteService {
  private wsProviderEndpoint = process.env.WS_PROVIDER;
  private wsProvider = new WsProvider(this.wsProviderEndpoint);
  private api = ApiPromise.create({ provider: this.wsProvider });

  private metadata: any = require("./../../../contract/vote.json");
  private contractAddress = process.env.VOTE_CONTRACT_ADDRESS;

  public async getAllVoter(): Promise<VoterEntity[]> {
    return new Promise<VoterEntity[]>(async (resolve, reject) => {
      let voters: VoterEntity[] = [];

      const api = await this.api;
      const contract = new ContractPromise(api, this.metadata, this.contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
      };

      const { output } = (await contract.query['getAllVoter'](this.contractAddress, options));
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

      resolve(voters);
    });
  }

  public async getVoterById(id: number): Promise<VoterEntity> {
    return new Promise<VoterEntity>(async (resolve, reject) => {
      let voter: VoterEntity = undefined;

      const api = await this.api;
      const contract = new ContractPromise(api, this.metadata, this.contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
      };

      const { output } = (await contract.query['getVoterById'](this.contractAddress, options, id));
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

      resolve(voter);
    });
  }

  public async setVoterExtrinsic(data: SetVoterDto): Promise<any> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', {
        refTime: 300000000000,
        proofSize: 500000,
      }),
    };

    const setVoterExtrinsic = contract.tx['setVoter'](
      options, data
    );

    return setVoterExtrinsic
  }

  public async getAllVote(): Promise<VoteEntity[]> {
    return new Promise<VoteEntity[]>(async (resolve, reject) => {
      let votes: VoteEntity[] = [];

      const api = await this.api;
      const contract = new ContractPromise(api, this.metadata, this.contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
      };

      const { output } = (await contract.query['getAllVotes'](this.contractAddress, options));
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

      resolve(votes);
    });
  }

  public async getVoteById(id: number): Promise<VoteEntity> {
    return new Promise<VoteEntity>(async (resolve, reject) => {
      let vote: VoteEntity = undefined;

      const api = await this.api;
      const contract = new ContractPromise(api, this.metadata, this.contractAddress);
      const options: any = {
        storageDepositLimit: null,
        gasLimit: api.registry.createType('WeightV2', api.consts.system.blockWeights['maxBlock']),
      };

      const { output } = (await contract.query['getVoteById'](this.contractAddress, options, id));
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

      resolve(vote);
    });
  }

  public async setVoteExtrinsic(data: SetVoteDto): Promise<any> {
    const api = await this.api;
    const contract = new ContractPromise(api, this.metadata, this.contractAddress);
    const options: any = {
      storageDepositLimit: null,
      gasLimit: api.registry.createType('WeightV2', {
        refTime: 300000000000,
        proofSize: 500000,
      }),
    };

    const setVoterExtrinsic = contract.tx['setVote'](
      options, data
    );

    return setVoterExtrinsic
  }
}
