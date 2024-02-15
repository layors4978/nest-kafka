const { version } = require('../package.json');

module.exports = {
  version,
  http: {
    host: 'localhost',
    port: 3000,
  },

  kafka: {
    // for INTERNAL
    brokers: '["kafka-1:19092","kafka-2:19093","kafka-3:19094"]',
    // for EXTERNAL
    // brokers: '["localhost:9092","localhost:9093","localhost:9094"]',
  },
};
