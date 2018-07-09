'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/seckill.test.js', () => {

  before(() => {
    app.redis.set('counter', 1);
  });

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should get "Buy 1 item successfully." then "Item sold out!"', async () => {
    const ctx = app.mockContext();
    let result = await ctx.service.seckill.seckill();
    assert(result, 'Buy 1 item successfully.');

    result = await ctx.service.seckill.seckill();
    assert(result, 'Item sold out!');
  });
});
