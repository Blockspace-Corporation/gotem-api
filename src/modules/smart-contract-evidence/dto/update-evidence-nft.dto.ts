import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateEvidenceNftDto {
    @ApiProperty({ type: String, description: 'This is a required property' })
    description: string = "";

    @ApiProperty({ type: String, description: 'This is a required property' })
    owner: string = "";

    @ApiProperty({ type: String, description: 'This is a required property' })
    file: string = "";

    @ApiProperty({ type: Number, description: 'This is a required property' })
    caseId: number = 0;

    @ApiProperty({ type: String, description: 'This is a required property' })
    status: string = "";
}
