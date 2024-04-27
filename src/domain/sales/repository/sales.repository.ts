import { Injectable } from '@nestjs/common';
import { RepositoryCore } from 'src/core/repository/repository-core.repository';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesEntity } from '../entity/sales.entity';

@Injectable()
export class SalesRepository extends RepositoryCore(SalesEntity) {
  constructor(
    @InjectRepository(SalesEntity)
    private repo: Pick<
      Repository<SalesEntity>,
      'save' | 'findOne' | 'create' | 'findBy'
    >,
  ) {
    super();
  }
}
