import {MigrationInterface, QueryRunner} from "typeorm";

export class RunningMigrations1635091157880 implements MigrationInterface {
    name = 'RunningMigrations1635091157880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "user_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tipoGranja" ("id" character varying NOT NULL, "sigla" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_1c9ce51066a6ef8714c774d2aa9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "faseProducao" ("id" character varying NOT NULL, "sigla" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bc635e0411da5ecb69a5b7659d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "animals" ("id" character varying NOT NULL, "nome" character varying NOT NULL, "tipoAnimal" character varying NOT NULL, "statusAnimal" real NOT NULL, "localizacao" character varying NOT NULL, "dataNascimento" character varying NOT NULL, "entradaPlantel" character varying NOT NULL, "pesoCompra" real NOT NULL, "raca" character varying NOT NULL, "codigoRastreamento" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tipoGranjaId" character varying, "faseProducaoId" character varying, CONSTRAINT "REL_a628e75aff2c613ad01525154a" UNIQUE ("tipoGranjaId"), CONSTRAINT "REL_10b7c45c3200c3f11c34d53b98" UNIQUE ("faseProducaoId"), CONSTRAINT "PK_6154c334bbb19186788468bce5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "animals" ADD CONSTRAINT "FK_a628e75aff2c613ad01525154aa" FOREIGN KEY ("tipoGranjaId") REFERENCES "tipoGranja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "animals" ADD CONSTRAINT "FK_10b7c45c3200c3f11c34d53b98f" FOREIGN KEY ("faseProducaoId") REFERENCES "faseProducao"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animals" DROP CONSTRAINT "FK_10b7c45c3200c3f11c34d53b98f"`);
        await queryRunner.query(`ALTER TABLE "animals" DROP CONSTRAINT "FK_a628e75aff2c613ad01525154aa"`);
        await queryRunner.query(`DROP TABLE "animals"`);
        await queryRunner.query(`DROP TABLE "faseProducao"`);
        await queryRunner.query(`DROP TABLE "tipoGranja"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
