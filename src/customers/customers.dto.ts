import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CustomersDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(255)
  address: string;

  @IsString()
  @MaxLength(100)
  city: string;

  @IsString()
  @MinLength(2)
  @MaxLength(2)
  state: string;
}

export interface FindAllParameters {
  title: string;
  status: string;
}
