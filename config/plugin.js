'use strict';

// had enabled by egg
// exports.static = true;

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.kafkajs = {
  enable: true,
  package: 'egg-kafkajs',
};
