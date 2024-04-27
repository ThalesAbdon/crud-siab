import { Body, Controller, Post } from '@nestjs/common';
import { AuthResponseDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  singIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ): AuthResponseDTO {
    return this.authService.signIn(username, password);
  }
}
