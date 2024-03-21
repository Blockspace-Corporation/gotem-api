import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
export declare class ExtrinsicService {
    private wsProviderEndpoint;
    private wsProvider;
    private api;
    executeExtrinsics(extrinsics: ExecuteExtrinsicsDto): Promise<any>;
}
