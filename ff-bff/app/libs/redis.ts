import Redis from "ioredis";

const redisClient = new Redis("redis://:Redis@1113@redis:6379")

export default redisClient;
