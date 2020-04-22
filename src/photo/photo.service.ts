
import { Injectable, Inject } from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { Photo } from './photo.entity';
import { FindByIdValidator } from '../validators/findbyid.validator';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');
@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private readonly photoRepository: Repository<Photo>
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  generateRandomData(): Photo {
    const photo = {
      name: faker.commerce.productName(),
      isPublished: faker.random.boolean(),
      filename: faker.system.fileName(),
      description: faker.lorem.sentence(),
      views: faker.random.number()
    } as Photo;
    return photo;
  }


  async insertData(photo: Photo) {

    await this.photoRepository.save(photo);

    return photo;
  }

  async findById(id) {
    return this.photoRepository.findOneOrFail(id);
  }
}