import config from 'config';

export const VERSION = config.get('version') as string;

export const HTTP_HOST = config.get('http.host') as string;
export const HTTP_PORT = config.get('http.port') as number;

export const KAFKA_BROKERS = JSON.parse(
  config.get('kafka.brokers'),
) as string[];
