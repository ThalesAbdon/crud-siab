import { Body, Controller, Post } from '@nestjs/common';
import { UsersDTO } from './users.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() sales: UsersDTO) {
    console.log(sales);
  }
}
