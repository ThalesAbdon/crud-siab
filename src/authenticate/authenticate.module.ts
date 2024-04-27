import { Module } from '@nestjs/common';
import { AuthenticateController } from './authenticate.controller';
import { AuthenticateService } from './authenticate.service';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [AuthenticateController],
  exports: [UsersService]
  providers: [AuthenticateService],
})
export class AuthenticateModule {}
