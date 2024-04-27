import { MigrationInterface, QueryRunner } from 'typeorm';

export class Sales1714233549400 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE "sales" (
                        id SERIAL PRIMARY KEY,
                        customerId SERIAL UNIQUE NOT NULL,
                        CONSTRAINT fk_customerId FOREIGN KEY(customerId) REFERENCES customers(id),
                        date DATE NOT NULL DEFAULT CURRENT_DATE,
                        totalPrice FLOAT,
                        userId SERIAL UNIQUE NOT NULL,
                        CONSTRAINT fk_userId FOREIGN KEY(userId) REFERENCES users(id)
                    );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS sales;`);
  }
}
