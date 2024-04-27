import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { CustomerEntity } from '../entity/customers.entity';

export class CustomerIdDto implements Pick<CustomerEntity, 'id'> {
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => (value ? Number(value) : ''))
  id: number;
}
