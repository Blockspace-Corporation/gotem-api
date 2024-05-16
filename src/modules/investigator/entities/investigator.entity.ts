import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'investigator' })
export class InvestigatorEntity {
    @PrimaryGeneratedColumn()
    investigator_id: number;
    
    @Column({nullable: true})
    profile_name: string;
    
    @Column({nullable: true})
    first_name: string;

    @Column({nullable: true})
    last_name: string;

    @Column({nullable: true})
    address: string;

    @Column()
    credentials: string;

    @Column()
    profile_picture: string;
    
    @Column({ default: "investigator" })
    role: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    status: string;

    @Column({nullable: true})
    wallet_public_address: string;
}
