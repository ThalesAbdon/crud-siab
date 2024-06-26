import { Inject, Injectable } from '@nestjs/common';
import { ServiceCore } from 'src/core/services/service-core.service';
import { UserRepository } from '../repository/user.repository';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService extends ServiceCore<UserEntity, UserEntity>() {
  constructor(
    @Inject(UserRepository) private readonly repository: UserRepository,
  ) {
    super();
  }

  async findBy(email: string): Promise<boolean> {
    return this.repository.findOne({ email });
  }
}
