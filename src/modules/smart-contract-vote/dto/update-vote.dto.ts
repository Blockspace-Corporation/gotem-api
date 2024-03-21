import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateVoteDto {
    @ApiProperty({ type: Number, description: 'This is a required property' })
    caseId: number = 0;

    @ApiProperty({ type: Number, description: 'This is a required property' })
    evidenceId: number = 0;

    @ApiProperty({ type: String, description: 'This is a required property' })
    voter: string = "";

    @ApiProperty({ type: Number, description: 'This is a required property' })
    yesCredit: number = 0;

    @ApiProperty({ type: Number, description: 'This is a required property' })
    noCredit: number = 0;

    @ApiProperty({ type: Number, description: 'This is a required property' })
    destributionReward: number = 0;
}
