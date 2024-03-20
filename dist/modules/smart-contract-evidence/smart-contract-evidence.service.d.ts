import { SetEvidenceNftDto } from './dto/set-evidence-nft.dto';
import { EvidenceNftEntity } from './entities/evidence-nft.entity';
export declare class SmartContractEvidenceService {
    private wsProviderEndpoint;
    private wsProvider;
    private api;
    private metadata;
    private contractAddress;
    getAllEvidence(): Promise<EvidenceNftEntity[]>;
    getEvidenceById(id: number): Promise<EvidenceNftEntity>;
    getAllEvidenceByCaseId(caseId: number): Promise<EvidenceNftEntity[]>;
    setEvidenceExtrinsic(data: SetEvidenceNftDto): Promise<any>;
}
