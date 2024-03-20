import { ExtrinsicService } from './extrinsic.service';
import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
import { ExecuteExtrinsicsStatusEntity } from './entities/execute-extrinsincs-status.entity';
export declare class ExtrinsicController {
    private readonly extrinsicService;
    constructor(extrinsicService: ExtrinsicService);
    executeExtrinsics(data: ExecuteExtrinsicsDto): Promise<ExecuteExtrinsicsStatusEntity>;
}
