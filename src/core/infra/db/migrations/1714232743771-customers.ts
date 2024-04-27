import { MigrationInterface, QueryRunner } from 'typeorm';

export class Customers1714232743771 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "customers" (
                    id SERIAL PRIMARY KEY,
                    name varchar(100) NOT NULL,
                    address varchar(255) NOT NULL, 
                    city varchar(100) NOT NULL,
                    state varchar(2) NOT NULL
                );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS customers;`);
  }
}
