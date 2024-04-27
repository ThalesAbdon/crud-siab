import { Controller, Inject } from '@nestjs/common';
import { ControllerCore } from 'src/core/controller/controller-core.controller';
import { CustomerEntity } from '../entity/customers.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { CustomerIdDto } from '../dto/customer-id.dto';
import { CustomerService } from '../service/customer.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('customers')
@ApiTags('customer')
export class CustomerController extends ControllerCore<any, CreateCustomerDto>(
  CustomerEntity,
  CreateCustomerDto,
  CustomerIdDto,
) {
  constructor(
    @Inject(CustomerService) private readonly service: CustomerService,
  ) {
    super();
  }
}
