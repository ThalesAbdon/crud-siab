import { SalesEntity } from 'src/domain/sales/entity/sales.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  active: boolean;

  @OneToMany(() => SalesEntity, (sales) => sales.user)
  sales: SalesEntity[];

  constructor(input: Partial<UserEntity>) {
    Object.assign(this, input);
  }
}
