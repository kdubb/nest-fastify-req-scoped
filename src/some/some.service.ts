import { Injectable, Scope } from '@nestjs/common';
import { OtherService } from '../other/other.service';

@Injectable({scope: Scope.REQUEST})
export class SomeService {

  constructor(private readonly otherService: OtherService) {
  }

  getMessage(): string {
    return this.otherService.getMessage();
  }

}
