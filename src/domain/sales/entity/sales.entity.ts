import { CustomerEntity } from 'src/domain/customers/entity/customers.entity';
import { UserEntity } from 'src/domain/users/entity/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('sales')
export class SalesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'customerid' })
  customerId: number;

  @Column()
  date: Date;

  @Column({ name: 'totalprice' })
  totalPrice: number;

  @Column({ name: 'userid' })
  userId: number;

  @ManyToOne(() => CustomerEntity, (customer) => customer.sales)
  @JoinColumn({ name: 'customerid' })
  customer: CustomerEntity;

  @ManyToOne(() => UserEntity, (user) => user.sales)
  @JoinColumn({ name: 'userid' })
  user: UserEntity;

  constructor(input: Partial<SalesEntity>) {
    Object.assign(this, input);
  }
}
