import {
  Body, CACHE_MANAGER, CacheInterceptor, CacheKey,
  Controller,
  Get,
  HttpException,
  HttpStatus, Inject,
  Param,
  Post, UseInterceptors,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { PhotoDto } from './photo.dto';
import { FindByIdValidator } from '../validators/findbyid.validator';


@Controller('photo')
@UseInterceptors(CacheInterceptor)
export class PhotoController {
  constructor(private readonly photoService: PhotoService, @Inject(CACHE_MANAGER) private cacheManager) {
  }

  @Get()
  @CacheKey('all-photos')
  async getPhoto(): Promise<Record<string, any>> {
    const photos = await this.photoService.findAll();
    return  {
      "length" : photos.length,
      "photos": photos
    };
  }

  @Get(":id")
  async getPhotoById(@Param() params: FindByIdValidator) {
    try {
     return await this.photoService.findById(params.id);
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "You have to provide a valid id",
      }, 403);
    }
  }

  /**
   * This endpoint creates random photo data
   *//*
  @Get('/insertRandom')
  insertRandomData(): Photo {
    const photo = this.photoService.generateRandomData();

    this.photoService.insertData(photo);

    return photo;
  }*/

  @Post()
  create(@Body() photoDto: PhotoDto) {
    this.cacheManager.del('all-photos');
    return this.photoService.insertData(photoDto as Photo);
  }


}