import { Inject, Injectable } from '@nestjs/common';
import { ServiceCore } from 'src/core/services/service-core.service';
import { SalesEntity } from '../entity/sales.entity';
import { SalesRepository } from '../repository/sales.repository';

@Injectable()
export class SalesService extends ServiceCore<SalesEntity, SalesEntity>() {
  constructor(
    @Inject(SalesRepository) private readonly repository: SalesRepository,
  ) {
    super();
  }
}
