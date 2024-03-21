import { ExtrinsicService } from './extrinsic.service';
import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
export declare class ExtrinsicController {
    private readonly extrinsicService;
    constructor(extrinsicService: ExtrinsicService);
    executeExtrinsics(data: ExecuteExtrinsicsDto): Promise<any>;
}
