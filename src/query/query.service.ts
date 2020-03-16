import { Injectable, Scope, Inject } from '@nestjs/common'
import { Request } from 'express'
import { REQUEST } from '@nestjs/core'

@Injectable({ scope: Scope.REQUEST })
export class QueryService {
  constructor(@Inject(REQUEST) private readonly request: Request) {
    console.log('For some reason, `request` is undefined', request)
  }

  getUsernameFromQueryParams(): string {
    return this.request.query.username
  }
}
