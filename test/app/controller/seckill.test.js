'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/seckill.test.js', () => {

  before(() => {
    app.redis.set('counter', 1);
  });

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /seckill', async () => {
    await app.httpRequest()
      .get('/seckill')
      .expect('Buy 1 item successfully.')
      .expect(200);

    await app.httpRequest()
      .get('/seckill')
      .expect('Item sold out!')
      .expect(200);
  });
});
