import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { KafkaModule } from './modules/kafka/kafka.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [KafkaModule, CommonModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
