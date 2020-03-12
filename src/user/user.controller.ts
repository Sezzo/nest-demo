import { Controller, Get, HttpException, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { FindByIdValidator } from '../validators/findbyid.validator';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(":id")
  async getUserById(@Param() params: FindByIdValidator) {

    try {
      return await this.userService.findById(params.id);
    } catch (e) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "No user found with given id",
      }, 403);
    }
  }
}