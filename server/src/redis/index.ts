import * as redis from "redis";

export default class Redis {
  private redisClient;

  constructor(host: string) {
    this.redisClient = redis.createClient({
      socket: { host },
    });
    this.redisClient.on("error", (err) =>
      console.log("Redis Client Error", err)
    );
    this.connect();
  }

  connect() {
    this.redisClient.connect();
    console.log("redis is work");
  }
  disconnect() {
    this.redisClient.disconnect();
    console.log("redis is died");
  }

  async getValue(key: string) {
    return await this.redisClient.get(key);
  }

  async setValue(key: string, value: string) {
    await this.redisClient.set(key, value);
  }

  async getAllValue(key: string, value: string) {
    return [this.redisClient.MGET, this.redisClient.KEYS];
  }
}
