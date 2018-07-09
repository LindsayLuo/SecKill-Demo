'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/initial.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /initial/redis', () => {
    return app.httpRequest()
      .get('/initial/redis')
      .expect('Set key counter with value 100 to redis successfully.')
      .expect(200);
  });

  it('should GET /initial/redis?key=test', () => {
    return app.httpRequest()
      .get('/initial/redis?key=test')
      .expect('Set key test with value 100 to redis successfully.')
      .expect(200);
  });

  it('should GET /initial/redis?value=20', () => {
    return app.httpRequest()
      .get('/initial/redis?value=20')
      .expect('Set key counter with value 20 to redis successfully.')
      .expect(200);
  });

  it('should GET /initial/redis?key=counter&value=20', () => {
    return app.httpRequest()
      .get('/initial/redis?key=counter&value=20')
      .expect('Set key counter with value 20 to redis successfully.')
      .expect(200);
  });

  it('should GET /initial/redis/delete', () => {
    return app.httpRequest()
      .get('/initial/redis/delete')
      .expect('Delete key counter from redis successfully.')
      .expect(200);
  });

  it('should GET /initial/redis/delete?key=test', () => {
    return app.httpRequest()
      .get('/initial/redis/delete?key=test')
      .expect('Delete key test from redis successfully.')
      .expect(200);
  });

  it('should GET /initial/redis/delete?key=test', () => {
    return app.httpRequest()
      .get('/initial/redis/delete?key=test')
      .expect('Do not have key test in redis.')
      .expect(200);
  });
});
