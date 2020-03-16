import { Controller, Get, Req } from '@nestjs/common'
import { Request } from 'express'

import { UsersService } from './users/users.service'

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getHello(@Req() request: Request): Promise<string> {
    return await this.usersService.getCurrentUsername(request)
  }
}
