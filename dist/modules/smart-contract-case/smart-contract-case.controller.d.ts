import { SmartContractCaseService } from './smart-contract-case.service';
import { SetCaseNftDto } from './dto/set-case-nft.dto';
import { CaseNftEntity } from './entities/case-nft.entity';
export declare class SmartContractCaseController {
    private readonly smartContractCaseService;
    constructor(smartContractCaseService: SmartContractCaseService);
    getAllCase(): Promise<CaseNftEntity[]>;
    getCaseById(id: number): Promise<CaseNftEntity>;
    setCaseExtrinsic(data: SetCaseNftDto): Promise<any>;
}
