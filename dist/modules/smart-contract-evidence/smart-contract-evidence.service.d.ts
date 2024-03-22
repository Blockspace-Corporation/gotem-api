import { ExtrinsicService } from '../extrinsic/extrinsic.service';
import { SetEvidenceNftDto } from './dto/set-evidence-nft.dto';
import { UpdateEvidenceNftDto } from './dto/update-evidence-nft.dto';
import { EvidenceNftEntity } from './entities/evidence-nft.entity';
export declare class SmartContractEvidenceService {
    private readonly extrinsicService;
    private metadata;
    private contractAddress;
    constructor(extrinsicService: ExtrinsicService);
    getAllEvidence(): Promise<EvidenceNftEntity[]>;
    getEvidenceById(id: number): Promise<EvidenceNftEntity>;
    getAllEvidenceByCaseId(caseId: number): Promise<EvidenceNftEntity[]>;
    setEvidenceExtrinsic(data: SetEvidenceNftDto): Promise<any>;
    updateEvidenceExtrinsic(id: number, data: UpdateEvidenceNftDto): Promise<any>;
    burnEvidenceExtrinsic(id: number): Promise<any>;
}
