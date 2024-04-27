import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticateService } from './authenticate.service';
import { AuthenticateDTO } from './authenticate.dto';

@Controller('authenticate')
export class AuthenticateController {
  constructor(private readonly _authSevice: AuthenticateService) {}

  @Post()
  create(@Body() auth: AuthenticateDTO) {
    this._authSevice.create(auth);
  }
}
