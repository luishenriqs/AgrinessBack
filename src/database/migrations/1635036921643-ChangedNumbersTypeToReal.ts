import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangedNumbersTypeToReal1635036921643 implements MigrationInterface {
    name = 'ChangedNumbersTypeToReal1635036921643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "statusAnimal"`);
        await queryRunner.query(`ALTER TABLE "animals" ADD "statusAnimal" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "pesoCompra"`);
        await queryRunner.query(`ALTER TABLE "animals" ADD "pesoCompra" real NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "pesoCompra"`);
        await queryRunner.query(`ALTER TABLE "animals" ADD "pesoCompra" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "animals" DROP COLUMN "statusAnimal"`);
        await queryRunner.query(`ALTER TABLE "animals" ADD "statusAnimal" integer NOT NULL`);
    }

}
