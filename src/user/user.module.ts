import { CacheModule, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';
import { userProviders } from './user.repository';

@Module({
  imports: [DatabaseModule,
    CacheModule.register({
      ttl: 15 // seconds
    })],
  controllers: [UserController],
  providers: [
    ...userProviders,
    UserService,
  ],
  exports: [UserService]
})
export class UserModule {}
