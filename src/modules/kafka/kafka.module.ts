import { Module } from '@nestjs/common';

import { KAFKA_SERVICE, KafkaServiceImpl } from './kafka.service';

const modules = [
  {
    provide: KAFKA_SERVICE,
    useClass: KafkaServiceImpl,
  },
];

@Module({
  providers: [...modules],
  exports: [...modules],
})
export class KafkaModule {}
