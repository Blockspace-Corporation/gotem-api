install typeorm  --> npm install -g typeorm
create migrations folder
create migration file--> typeorm migration:create ./src/modules/investigator/migrations
run migration --> npm run typeorm migration:run -- -d ./src/config/typeorm.ts


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
                email VARCHAR(255),
                status VARCHAR(255),
                wallet_public_address VARCHAR(255)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE investigator`);
    }
}
