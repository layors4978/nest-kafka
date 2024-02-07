const { version } = require('../package.json');

module.exports = {
  version,
  http: {
    host: 'localhost',
    port: 3000,
  },

  kafka: {
    brokers: '["kafka-1:19092","kafka-2:19093","kafka-3:19094"]',
  },
};
