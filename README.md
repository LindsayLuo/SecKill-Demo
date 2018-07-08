# SecKill

SecKill demo

## QuickStart

<!-- add docs here for user -->
* Prepare environment
	* Install docker. Please refer [Docker](https://docs.docker.com/get-started/) for more information.
	* Start mysql, redis, kafka with docker compose. See "docker-compose.yml" file for detail configure.
	```bash
	$ docker-compose up
	```
* Create seckill table.
	```bash
	$ docker exec -it docker_mysql_1 mysql -u root -p 
	$ create database seckill;
	$ use seckill;
	$ create table seckill (
		id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		date DATETIME
	 );
	```
* Create kafka topic
	```bash
	$ docker exec -it docker_kafka_1 /opt/kafka/bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic CAR_NUMBER
	```
* Create redis key
	```bash
	$ docker exec -it docker_redis_1 redis-cli
	$ set counter 100
	$ get counter
	```
* Run the test with [Jmeter](https://jmeter.apache.org/). Please refer "Seckill.jmx" for more detail.

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

