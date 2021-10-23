import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAnimals1634941909616 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
