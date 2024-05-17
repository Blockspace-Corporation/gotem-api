import { ExtrinsicService } from '../extrinsic/extrinsic.service';
import { SetCaseNftDto } from './dto/set-case-nft.dto';
import { UpdateCaseNftDto } from './dto/update-case-nft.dto';
import { CaseNftEntity } from './entities/case-nft.entity';
export declare class SmartContractCaseService {
    private readonly extrinsicService;
    private metadata;
    private contractAddress;
    constructor(extrinsicService: ExtrinsicService);
    getAllCase(): Promise<CaseNftEntity[]>;
    getCaseById(id: number): Promise<CaseNftEntity>;
    setCaseExtrinsic(data: SetCaseNftDto): Promise<any>;
    updateCaseExtrinsic(id: number, data: UpdateCaseNftDto): Promise<any>;
    burnCaseExtrinsic(id: number): Promise<any>;
}
