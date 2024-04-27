import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticateService } from 'src/authenticate/authenticate.service';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { AuthResponseDTO } from './auth.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;
  constructor(
    private readonly authenticateService: AuthenticateService,
    private readonly _jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }

  signIn(username: string, password: string): AuthResponseDTO {
    const foundUser = this.authenticateService.findByUserName(username);
    if (!foundUser || bcryptCompareSync(password, foundUser.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: foundUser.id, username: foundUser.name };
    const token = this._jwtService.sign(payload);
    return { token, expireIn: this.jwtExpirationTimeInSeconds };
  }
}
