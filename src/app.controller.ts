import { Controller, Get } from '@nestjs/common';

import { VERSION } from './env';

@Controller()
export class AppController {
  @Get()
  versionCheck(): { version: string } {
    return { version: VERSION };
  }
}
