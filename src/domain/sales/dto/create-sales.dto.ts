import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SalesEntity } from '../entity/sales.entity';

export class CreateSalesDto extends SalesEntity {
  @ApiProperty({ type: Number, example: 1 })
  @IsNumber()
  customerId: number;

  @ApiProperty({ type: Number, example: 182 })
  @IsNumber()
  totalPrice: number;

  @ApiProperty({ type: Number, example: 1 })
  @IsNumber()
  userId: number;
}
