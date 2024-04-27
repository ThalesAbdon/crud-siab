import { Body, Controller, Post } from '@nestjs/common';
import { SalesDTO } from './sales.dto';

@Controller('sales')
export class SalesController {
  @Post()
  create(@Body() sales: SalesDTO) {
    console.log(sales);
  }
}
