import { Inject, Injectable } from '@nestjs/common';
import { ServiceCore } from 'src/core/services/service-core.service';
import { CustomerRepository } from '../repository/customer.repository';
import { CustomerEntity } from '../entity/customers.entity';

@Injectable()
export class CustomerService extends ServiceCore<
  CustomerEntity,
  CustomerEntity
>() {
  constructor(
    @Inject(CustomerRepository) private readonly repository: CustomerRepository,
  ) {
    super();
  }
}
