import { Module } from '@nestjs/common';
import { DefaultScopedController } from './default-scoped.controller';
import { RequestScopedController } from './request-scoped.controller';
import { SomeService } from './some/some.service';
import { OtherService } from './other/other.service';

@Module({
  imports: [],
  controllers: [DefaultScopedController, RequestScopedController],
  providers: [SomeService, OtherService],
})
export class AppModule {}
