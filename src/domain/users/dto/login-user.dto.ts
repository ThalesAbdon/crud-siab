import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ type: String, example: 'luffy@gmail.com' })
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: 'Test*123456' })
  @IsString()
  @MaxLength(225)
  @IsNotEmpty()
  password: string;
}
