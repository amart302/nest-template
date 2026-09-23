import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import type { ServiceMessageResponse } from './common/types/service-response.types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHello(): ServiceMessageResponse {
    return this.appService.getHello();
  }
}
