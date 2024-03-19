import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class TransferExtrinsicDto {
    @ApiProperty({ type: Number, description: 'This is a required property' })
    id: number = 0;

    @ApiProperty({ type: String, description: 'This is a required property' })
    target: string = "";

    @ApiProperty({ type: Number, description: 'This is an optional property' })
    amount: number = 0;
}