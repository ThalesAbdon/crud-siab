import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class SalesDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  CustomerId: number;

  @IsDate()
  @IsNotEmpty()
  Date: Date;

  @IsNumber()
  @IsNotEmpty()
  TotalPrice: number;

  @IsNumber()
  @IsNotEmpty()
  UserId: number;
}
