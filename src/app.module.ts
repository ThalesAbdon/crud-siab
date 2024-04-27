import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { SalesModule } from './sales/sales.module';
import { UsersModule } from './users/users.module';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CustomersModule,
    SalesModule,
    UsersModule,
    AuthenticateModule,
    AuthModule,
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
