import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findById(id) {
    return this.photoRepository.findOneOrFail(id);
  }
}
