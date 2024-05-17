import { ExtrinsicService } from '../extrinsic/extrinsic.service';
import { SetVoterDto } from './dto/set-voter-nft.dto';
import { SetVoteDto } from './dto/set-vote.dto';
import { UpdateVoterDto } from './dto/update-voter-nft.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VoterEntity } from './entities/voter.entity';
import { VoteEntity } from './entities/vote.entity';
export declare class SmartContractVoteService {
    private readonly extrinsicService;
    private metadata;
    private contractAddress;
    constructor(extrinsicService: ExtrinsicService);
    getAllVoter(): Promise<VoterEntity[]>;
    getVoterById(id: number): Promise<VoterEntity>;
    setVoterExtrinsic(data: SetVoterDto): Promise<any>;
    updateVoterExtrinsic(id: number, data: UpdateVoterDto): Promise<any>;
    burnVoterExtrinsic(id: number): Promise<any>;
    getAllVotes(): Promise<VoteEntity[]>;
    getVoteById(id: number): Promise<VoteEntity>;
    getAllVotesByEvidenceId(evidenceId: number): Promise<VoteEntity[]>;
    setVoteExtrinsic(data: SetVoteDto): Promise<any>;
    updateVoteExtrinsic(id: number, data: UpdateVoteDto): Promise<any>;
    burnVoteExtrinsic(id: number): Promise<any>;
}
