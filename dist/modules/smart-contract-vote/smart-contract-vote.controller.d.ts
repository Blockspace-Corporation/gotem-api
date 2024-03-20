import { SmartContractVoteService } from './smart-contract-vote.service';
import { SetVoterDto } from './dto/set-voter-nft.dto';
import { VoterEntity } from './entities/voter.entity';
import { VoteEntity } from './entities/vote.entity';
import { SetVoteDto } from './dto/set-vote.dto';
export declare class SmartContractVoteController {
    private readonly smartContractVoteService;
    constructor(smartContractVoteService: SmartContractVoteService);
    getAllVoter(): Promise<VoterEntity[]>;
    getVoterById(id: number): Promise<VoterEntity>;
    setVoterExtrinsic(data: SetVoterDto): Promise<any>;
    getAllVote(): Promise<VoteEntity[]>;
    getVoteById(id: number): Promise<VoteEntity>;
    setVoteExtrinsic(data: SetVoteDto): Promise<any>;
}
