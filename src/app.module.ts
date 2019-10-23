import { Module } from '@nestjs/common';
import { DefaultScopedController } from './default-scoped.controller';
import { RequestScopedController } from './request-scoped.controller';

@Module({
  imports: [],
  controllers: [DefaultScopedController, RequestScopedController],
  providers: [],
})
export class AppModule {}
