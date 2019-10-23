import { BadRequestException, Controller, HttpCode, Post, Scope } from '@nestjs/common';

@Controller({path: 'def', scope: Scope.DEFAULT})
export class DefaultScopedController {

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

}
