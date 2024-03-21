import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateVoterDto {
    @ApiProperty({ type: Number, description: 'This is a required property' })
    caseId: number = 0;

    @ApiProperty({ type: String, description: 'This is a required property' })
    voter: string = "";

    @ApiProperty({ type: Number, description: 'This is a required property' })
    amountHold: number = 0;

    @ApiProperty({ type: Number, description: 'This is a required property' })
    voteCredit: number = 0;
}
