import { SalesEntity } from 'src/domain/sales/entity/sales.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('customers')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToMany(() => SalesEntity, (sales) => sales.customer)
  sales: SalesEntity[];

  constructor(input: Partial<CustomerEntity>) {
    Object.assign(this, input);
  }
}
