import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInvestigatorTable1715840204200 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "investigator",
                columns: [
                    {
                        name: "investigator_id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true, 
                        generationStrategy: 'increment'
                    },
                    {
                        name: "profile_name",
                        type: "varchar",
                    },
                    {
                        name: "first_name",
                        type: "varchar",
                    },
                    {
                        name: "last_name",
                        type: "varchar",
                    },
                    {
                        name: "address",
                        type: "varchar",
                    },
                    {
                        name: "credentials",
                        type: "varchar",
                    },
                    {
                        name: "profile_picture",
                        type: "varchar",
                    },
                    {
                        name: "role",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "status",
                        type: "varchar",
                    },
                    {
                        name: "wallet_public_address",
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
