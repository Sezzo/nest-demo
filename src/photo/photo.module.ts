import { CACHE_MANAGER, CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { AppModule } from '../app.module';

@Module({
  imports: [DatabaseModule,
    CacheModule.register({
      ttl: 15 // seconds
    })],
  controllers: [PhotoController],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
})
export class PhotoModule {}