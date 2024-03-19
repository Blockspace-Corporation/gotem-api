import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class SetCaseNftDto {
    @ApiProperty({ type: String, description: 'This is a required property' })
    title: string = "";

    @ApiProperty({ type: String, description: 'This is a required property' })
    description: string = "";

    @ApiProperty({ type: String, description: 'This is a required property' })
    category: string = "";

    @ApiProperty({ type: String, description: 'This is a required property' })
    owner: string = "";

    @ApiProperty({ type: Number, description: 'This is a required property' })
    bounty: number = 0;

    @ApiProperty({ type: String, description: 'This is a required property' })
    file: string = "";

    @ApiProperty({ type: String, description: 'This is a required property' })
    status: string = "";
}
