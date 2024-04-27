import { Injectable } from '@nestjs/common';
import { AuthenticateDTO } from './authenticate.dto';

@Injectable()
export class AuthenticateService {
  create();
  findByUserName(username: string): AuthenticateDTO | null {}
}
