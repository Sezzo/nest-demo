import { IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FindByIdValidator {
  @ApiProperty()
  @IsNumberString()
  id: number;
}