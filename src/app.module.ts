import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { UserModule } from './domain/users/users.module';
import { SalesModule } from './domain/sales/sales.module';
import { CustomerModule } from './domain/customers/customer.module';

@Module({
  imports: [
    { global: true, module: CoreModule },
    UserModule,
    SalesModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
