import { Injectable } from '@nestjs/common'
import { ModuleRef, ContextIdFactory } from '@nestjs/core'
import { Request } from 'express'
import { QueryService } from 'src/query/query.service'

@Injectable()
export class UsersService {
  constructor(private readonly moduleRef: ModuleRef) {}

  public async getCurrentUsername(request: Request): Promise<string> {
    const queryService = await this.getInjectedQueryService(request)
    return queryService.getUsernameFromQueryParams()
  }

  private async getInjectedQueryService(request: Request) {
    const contextId = ContextIdFactory.getByRequest(request)
    console.log('UsersService context ID', contextId)
    return await this.moduleRef.resolve(QueryService, contextId)
  }
}
