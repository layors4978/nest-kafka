import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

import { KAFKA_BROKERS } from 'src/env';
import {
  LOGGER_SERVICE,
  LoggerService,
} from '../common/services/logger/logger.service';

export const KAFKA_SERVICE = Symbol('KAFKA_SERVICE');

export interface KafkaService {
  initTopic(): Promise<void>;
}

@Injectable()
export class KafkaServiceImpl implements KafkaService, OnModuleInit {
  private kafka: Kafka;

  constructor(
    @Inject(LOGGER_SERVICE)
    private readonly loggerService: LoggerService,
  ) {
    this.kafka = new Kafka({
      brokers: KAFKA_BROKERS,
    });
  }

  async onModuleInit(): Promise<void> {
    await this.initTopic();
  }

  async initTopic(): Promise<void> {
    const topicCreater = this.kafka.admin();
    await topicCreater.connect();
    this.loggerService.system().info(`start creating topics...`);

    try {
      await topicCreater.createTopics({
        topics: [
          { topic: 'test-topic', numPartitions: 3, replicationFactor: 3 },
        ],
      });
    } catch (err) {
      this.loggerService.system().error(`failed to create topics.`);
      await topicCreater.disconnect();
      throw err;
    }

    await topicCreater.disconnect();
    this.loggerService.system().info(`topics created.`);
  }
}
