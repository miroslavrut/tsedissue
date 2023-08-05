import { Injectable, Inject } from '@tsed/di'
import { PrismaService } from '@tsed/prisma'
import { UserModel } from './user.model'

@Injectable()
export class UsersService {
  @Inject()
  protected prisma: PrismaService

  async create(user: UserModel) {
    return this.prisma.user.create({ data: user })
  }

  async findMany() {
    return this.prisma.user.findMany({})
  }
}
