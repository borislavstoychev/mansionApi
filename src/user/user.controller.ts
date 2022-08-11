import {
  Body,
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':username')
  checkUser(
    @Param('username') username: string,
  ): Promise<{ alreadyExist: boolean }> {
    return this.userService.findOne(username);
  }
}
