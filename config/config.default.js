'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_lindsayluo';

  // add your config here
  config.middleware = [];

  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // user name
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'seckill',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.kafkajs = {
    host: 'localhost:9092',
    sub: [
      {
        groupId: 'consumer-groupId',
        topics: [ 'seckill' ],
        'seckill-KEYS': [ 'CAR_NUMBER' ],
      },
    ],
    pub:
      {
        key: 'test',
        topics: [ 'seckill' ],
        // Configuration for when to consider a message as acknowledged, default 1
        requireAcks: 1,
        // The amount of time in milliseconds to wait for all acks before considered, default 100ms
        ackTimeoutMs: 1000,
        // Partitioner type (default = 0, random = 1, cyclic = 2, keyed = 3, custom = 4), default 0
        partitionerType: 2,
        partition: 0,
        attributes: 0,
      },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
  };

  config.redis = {
    client: {
      port: '6379',
      host: 'localhost',
      password: null,
      db: 0,
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
  };

  return config;
};
