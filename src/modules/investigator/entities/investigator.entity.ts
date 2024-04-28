import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
// import { Photo } from '../photos/photo.entity';

export class Investigator {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    profile_name: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    address: string;

    @Column()
    credentials: string;

    // @OneToMany(type => Photo, photo => photo.user)
    // photos: Photo[];

    @Column()
    role: string = "investigator";

    @Column()
    email: string;

    @Column()
    status: string;

    @Column()
    wallet_public_address: string;
}
