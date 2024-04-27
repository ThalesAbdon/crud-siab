import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entity/user.entity';

export class CreateUserDto extends UserEntity {
  @ApiProperty({ type: String, example: 'Luffy' })
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

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

  @ApiProperty({ type: Boolean, example: true })
  @IsBoolean()
  active: boolean = true;
}
