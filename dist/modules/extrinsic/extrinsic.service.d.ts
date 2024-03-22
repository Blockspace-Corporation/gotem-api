import { ExecuteExtrinsicsDto } from './dto/execute-extrinsics.dto';
export declare class ExtrinsicService {
    private wsProviderEndpoint;
    private wsProvider;
    private api;
    createContractQuery(metadata: any, contractAddress: string, messageName: string, ...params: any[]): Promise<any>;
    createContractTransaction(metadata: any, contractAddress: string, messageName: string, ...params: any[]): Promise<any>;
    executeExtrinsics(extrinsics: ExecuteExtrinsicsDto): Promise<any>;
}
