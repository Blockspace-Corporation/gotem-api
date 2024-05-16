import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class RegisterInvestigatorDto {
    @ApiProperty({ type: Number, description: 'This is a required property' })
    investigator_id: number;
    
    @ApiProperty({ type: String, description: 'This is a required property' })
    profile_name: string;
    
    @ApiProperty({ type: String, description: 'This is a required property' })
    first_name: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    last_name: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    address: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    credentials: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    profile_picture: string;
    
    @ApiProperty({ type: String, description: 'This is a required property' })
    role: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    email: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    status: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    wallet_public_address: string;
}
