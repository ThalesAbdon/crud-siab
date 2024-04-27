import { Module } from '@nestjs/common';
import { config } from './db/typeOrm.migration-config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  exports: [TypeOrmModule.forRoot(config)],
})
export class InfraModule {}
