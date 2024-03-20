import { SmartContractEvidenceService } from './smart-contract-evidence.service';
import { SetEvidenceNftDto } from './dto/set-evidence-nft.dto';
import { EvidenceNftEntity } from './entities/evidence-nft.entity';
export declare class SmartContractEvidenceController {
    private readonly smartContractEvidenceService;
    constructor(smartContractEvidenceService: SmartContractEvidenceService);
    getAllEvidence(): Promise<EvidenceNftEntity[]>;
    getEvidenceById(id: number): Promise<EvidenceNftEntity>;
    setEvidenceExtrinsic(data: SetEvidenceNftDto): Promise<any>;
}
