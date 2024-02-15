import { Global, Module } from '@nestjs/common';

import {
  LOGGER_SERVICE,
  LoggerServiceImpl,
} from './services/logger/logger.service';

const modules = [
  {
    provide: LOGGER_SERVICE,
    useClass: LoggerServiceImpl,
  },
];

@Global()
@Module({
  providers: [...modules],
  exports: [...modules],
})
export class CommonModule {}
