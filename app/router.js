'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/seckill', controller.seckill.seckill);
  router.get('/initial/redis', controller.initial.redisSet);
  router.get('/initial/redis/delete', controller.initial.redisDelete);
};
