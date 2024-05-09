import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInvestigatorTable1612345678901 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE investigator (
                investigator_id INT AUTO_INCREMENT PRIMARY KEY,
                profile_name VARCHAR(255),
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                address VARCHAR(255),
                role VARCHAR(255) DEFAULT 'investigator',
                email VARCHAR(255) UNIQUE,
                status VARCHAR(255),
                wallet_public_address VARCHAR(255)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE investigator`);
    }
}
