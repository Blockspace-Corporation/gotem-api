import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ExecuteExtrinsicsDto {
    @ApiProperty({type: String, description: 'This is a required property'})
    signedExtrincs: string = "";
}
