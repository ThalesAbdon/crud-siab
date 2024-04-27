import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersDTO, FindAllParameters } from './customers.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Post()
  create(@Body() customer: CustomersDTO) {
    this.customerService.create(customer);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    console.log(id);
  }

  @Get()
  findAll(@Query() params: FindAllParameters): CustomersDTO[] {
    return this.customerService.findAll(params);
  }

  @Put()
  update(@Body() customer: CustomersDTO) {
    this.customerService.update(customer);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
  }
}
