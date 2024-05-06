import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Investigator {
    @PrimaryGeneratedColumn()
    investigator_id: number;
    
    @Column()
    profile_name: string;
    
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    address: string;

    // @Column()
    // credentials: string;

    // @Column()
    // profile_picture: string;
    
    @Column({ default: "investigator" })
    role: string;

    @Column()
    email: string;

    @Column()
    status: string;

    @Column()
    wallet_public_address: string;
    
}
