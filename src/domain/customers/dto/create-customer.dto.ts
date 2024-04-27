import { IsNotEmpty, IsString, Length, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CustomerEntity } from '../entity/customers.entity';

export class CreateCustomerDto extends CustomerEntity {
  @ApiProperty({ type: String, example: 'Carlos' })
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, example: 'Rua 30' })
  @IsString()
  @MaxLength(225)
  @IsNotEmpty()
  address: string;

  @ApiProperty({ type: String, example: 'Campinas' })
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  city: string;

  @ApiProperty({ type: String, example: 'SP' })
  @IsString()
  @Length(2)
  @IsNotEmpty()
  state: string;
}
