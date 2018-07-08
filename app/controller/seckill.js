'use strict';

const Controller = require('egg').Controller;

class SecKillController extends Controller {
  async seckill() {
    const result = await this.ctx.service.seckill.seckill();
    this.ctx.body = result;
  }
}

module.exports = SecKillController;
