import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>
  ) {}

  async findById(id): Promise<User> {
    return this.userRepository.findOneOrFail(id, {select: ['id', 'name']});
  }

  async findOne(username: string): Promise<User> {
    console.log("username", username)
    return await this.userRepository.findOneOrFail( {where: {name: username}});
  }
}
