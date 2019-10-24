import { BadRequestException, Controller, HttpCode, Inject, Post, Scope } from '@nestjs/common';
import { ModuleRef, REQUEST } from '@nestjs/core';
import { REQUEST_CONTEXT_ID } from '@nestjs/core/router/request/request-constants';
import { SomeService } from './some/some.service';

@Controller({path: 'req', scope: Scope.REQUEST})
export class RequestScopedController {

  constructor(
    private module: ModuleRef,
    @Inject(REQUEST) private readonly request: any,
  ) {
  }

  @Post('test1')
  @HttpCode(204)
  postTest1(): string {
    throw new BadRequestException('Some Error');
  }

  @Post('test2')
  postTest2(): string {
    throw new BadRequestException('Some Error');
  }

  @Post('test3')
  @HttpCode(204)
  async postTest3(): Promise<void> {
    return;
  }

  @Post('test4')
  async postTest4(): Promise<object> {
    return {test: 'value'};
  }

  @Post('res1')
  async postResolve1(): Promise<object> {
    const someService = await this.module.resolve(SomeService);
    return {
      localMessage: 'Request ' + this.request[REQUEST_CONTEXT_ID],
      messae: someService.getMessage(),
    };
  }

}
