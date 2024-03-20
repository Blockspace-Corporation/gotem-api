import { SetCaseNftDto } from './dto/set-case-nft.dto';
import { CaseNftEntity } from './entities/case-nft.entity';
export declare class SmartContractCaseService {
    private wsProviderEndpoint;
    private wsProvider;
    private api;
    private metadata;
    private contractAddress;
    getAllCase(): Promise<CaseNftEntity[]>;
    getCaseById(id: number): Promise<CaseNftEntity>;
    setCaseExtrinsic(data: SetCaseNftDto): Promise<any>;
}
