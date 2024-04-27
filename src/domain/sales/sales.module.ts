import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesEntity } from './entity/sales.entity';
import { Module } from '@nestjs/common';
import { SalesController } from './controller/sales.controller';
import { SalesRepository } from './repository/sales.repository';
import { SalesService } from './service/sale.service';

@Module({
  imports: [TypeOrmModule.forFeature([SalesEntity])],

  controllers: [SalesController],
  providers: [SalesRepository, SalesService],
})
export class SalesModule {}
