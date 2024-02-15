import { Injectable } from '@nestjs/common';
import { Logger, createLogger, format, transports } from 'winston';

export const LOGGER_SERVICE = Symbol('LOGGER_SERVICE');

export interface LoggerService {
  system(): Logger;
}

@Injectable()
export class LoggerServiceImpl implements LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: 'silly',
      format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss Z' }),
        format.json(),
        format.colorize({ all: true }),
      ),
      transports: [new transports.Console()],
    });
  }

  system(): Logger {
    return this.logger;
  }
}
