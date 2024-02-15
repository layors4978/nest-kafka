import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
