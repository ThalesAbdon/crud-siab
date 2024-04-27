import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1714226017051 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "users" (
                id SERIAL PRIMARY KEY,
                name varchar(100) NOT NULL,
                email varchar(100) NOT NULL UNIQUE, 
                password varchar(255) NOT NULL,
                active BOOL NOT NULL DEFAULT TRUE
            );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS users;`);
  }
}
