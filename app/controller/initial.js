'use strict';

const Controller = require('egg').Controller;

const defaultKey = 'counter';
const defaultValue = 100;

class InitialController extends Controller {
  async redisSet() {
    const { app, ctx } = this;
    const redis = app.redis;
    let redisKey = defaultKey;
    let redisValue = defaultValue;
    if (ctx.query.key) {
      redisKey = ctx.query.key;
    }
    if (ctx.query.value) {
      redisValue = ctx.query.value;
    }
    await redis.set(redisKey, redisValue);
    this.ctx.body = 'Set key ' + redisKey + ' with value ' + redisValue + ' to redis successfully.';
  }

  async redisDelete() {
    const { app, ctx } = this;
    const redis = app.redis;
    let redisKey = defaultKey;
    if (ctx.query.key) {
      redisKey = ctx.query.key;
    }
    const result = await redis.del(redisKey);
    if (result === 0) {
      this.ctx.body = 'Do not have key ' + redisKey + ' in redis.';
    } else {
      this.ctx.body = 'Delete key ' + redisKey + ' from redis successfully.';
    }
  }
}

module.exports = InitialController;
