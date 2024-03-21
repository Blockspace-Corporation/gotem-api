import { SetVoterDto } from './dto/set-voter-nft.dto';
import { SetVoteDto } from './dto/set-vote.dto';
import { UpdateVoterDto } from './dto/update-voter-nft.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VoterEntity } from './entities/voter.entity';
import { VoteEntity } from './entities/vote.entity';
export declare class SmartContractVoteService {
    private wsProviderEndpoint;
    private wsProvider;
    private api;
    private metadata;
    private contractAddress;
    getAllVoter(): Promise<VoterEntity[]>;
    getVoterById(id: number): Promise<VoterEntity>;
    setVoterExtrinsic(data: SetVoterDto): Promise<any>;
    updateVoterExtrinsic(id: number, data: UpdateVoterDto): Promise<any>;
    burnVoterExtrinsic(id: number): Promise<any>;
    getAllVote(): Promise<VoteEntity[]>;
    getVoteById(id: number): Promise<VoteEntity>;
    getAllVoteByEvidenceId(evidenceId: number): Promise<VoteEntity[]>;
    setVoteExtrinsic(data: SetVoteDto): Promise<any>;
    updateVoteExtrinsic(id: number, data: UpdateVoteDto): Promise<any>;
    burnVoteExtrinsic(id: number): Promise<any>;
}
