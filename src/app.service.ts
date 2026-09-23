import { Injectable } from '@nestjs/common';

import type { ServiceMessageResponse } from './common/types/service-response.types';

@Injectable()
export class AppService {
  getHello(): ServiceMessageResponse {
    return {
      message: 'Hello World!',
    };
  }
}
