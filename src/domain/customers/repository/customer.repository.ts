import { Injectable } from '@nestjs/common';
import { RepositoryCore } from 'src/core/repository/repository-core.repository';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entity/customers.entity';

@Injectable()
export class CustomerRepository extends RepositoryCore(CustomerEntity) {
  constructor(
    @InjectRepository(CustomerEntity)
    private repo: Pick<
      Repository<CustomerEntity>,
      'save' | 'findOne' | 'create' | 'findBy'
    >,
  ) {
    super();
  }
}
