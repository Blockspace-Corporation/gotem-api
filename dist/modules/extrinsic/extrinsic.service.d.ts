import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
import { ExecuteExtrinsicsStatusEntity } from './entities/execute-extrinsincs-status.entity';
export declare class ExtrinsicService {
    private wsProviderEndpoint;
    private wsProvider;
    private api;
    executeExtrinsics(extrinsics: ExecuteExtrinsicsDto): Promise<ExecuteExtrinsicsStatusEntity>;
}
