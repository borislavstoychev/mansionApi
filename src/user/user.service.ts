import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const users =
      await this.prisma.user.findMany();
    return users;
  }

  async findOne(username: string) {
    const user =
      await this.prisma.user.findUnique({
        where: { username: username },
      });
    if (user) {
      return { alreadyExist: true };
    }
    return { alreadyExist: false };
  }
}
