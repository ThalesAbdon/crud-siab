import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';
import { SalesEntity } from '../entity/sales.entity';

export class SalesIdDto implements Pick<SalesEntity, 'id'> {
  @IsNumber()
  @IsNotEmpty()
  @Transform(({ value }) => (value ? Number(value) : ''))
  id: number;
}
