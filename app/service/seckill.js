'use strict';

const Service = require('egg').Service;
const COUNTER = 'counter';

class SeckillService extends Service {
    async seckill() {
        const { app, ctx } = this;
        const redis = app.redis;
        await redis.watch(COUNTER);
        const result = await redis.get(COUNTER, function(err, reply) {
            if (parseInt(reply) > 0) {
                var multi = redis.multi();
                multi.decr(COUNTER);
                multi.exec(function(err, replies) {
                    if (null === replies) {
                        console.log("Can not get the lock. Retry....");
                        ctx.service.seckill.seckill();
                    } else {
                        const msg = [ ctx.kafka.Message('seckill', 'CAR_NUMBER', 'Sold 1 seckill item')];
                        try {
                          ctx.kafka.send(msg);
                        } catch(err) {
                          console.log('Message send error : ', err);
                        }
                    }
                });
            } else {
                console.log("Sold out!");
            }
        });

        if(result > 0){
            return 'Buy 1 item successfully';
        }
        return 'Item sold out!';
    }
}

module.exports = SeckillService;
