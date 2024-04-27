import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CustomerEntity } from './entity/customers.entity';
import { CustomerController } from './controller/customer.controller';
import { CustomerRepository } from './repository/customer.repository';
import { CustomerService } from './service/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],

  controllers: [CustomerController],
  providers: [CustomerRepository, CustomerService],
})
export class CustomerModule {}
