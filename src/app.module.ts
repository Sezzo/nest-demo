import { CACHE_MANAGER, CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PhotoModule } from './photo/photo.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    PhotoModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
