import { Contains, IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PhotoDto {

  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @ApiProperty()
  @MaxLength(10)
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @Contains(".jpg")
  filename: string;

  @ApiProperty()
  @IsBoolean()
  isPublished: boolean;
}