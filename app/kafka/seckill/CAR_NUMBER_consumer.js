'use strict';

const Subscription = require('egg').Subscription;

class MessageConsumer extends Subscription {
  async subscribe(message) {
    // Handle message with business logic
    const result = await this.app.mysql.insert('seckill', { date: this.app.mysql.literals.now });
    if (result.affectedRows === 1) {
      console.log('Added to DB successfully.');
    } else {
      console.warn('Something wrong. Please do more check on message : ', message);
    }
  }
}
module.exports = MessageConsumer;
