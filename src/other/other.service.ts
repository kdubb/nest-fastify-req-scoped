import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { REQUEST_CONTEXT_ID } from '@nestjs/core/router/request/request-constants';

@Injectable({scope: Scope.REQUEST})
export class OtherService {

  constructor(
    @Inject(REQUEST) private readonly request: any,
  ) {
  }

  getMessage(): string {
    return 'Request ' + this.request[REQUEST_CONTEXT_ID];
  }

}
