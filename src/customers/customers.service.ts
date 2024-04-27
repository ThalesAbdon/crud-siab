import { Injectable } from '@nestjs/common';
import { CustomersDTO, FindAllParameters } from './customers.dto';

@Injectable()
export class CustomersService {
  private customer: CustomersDTO[] = [];

  create(customer: CustomersDTO) {
    this.customer.push(customer);
    console.log(customer);
  }

  findById(id: string): CustomersDTO {
    const foundCustomer = this.customer.filter((t) => t.id === id);
  }

  findAll(params: FindAllParameters): CustomersDTO[] {}

  update(customer: CustomersDTO) {}

  remove(id: string) {}
}
