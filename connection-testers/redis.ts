import { createClient as createRedisClient, RedisClientType } from "redis";

const REDIS_URL = process.env.REDIS_URL;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;

async function main() {
  let redisClient: RedisClientType | null = null;
  if (REDIS_URL) {
    redisClient = createRedisClient({
      url: REDIS_URL,
    });
  } else if (REDIS_HOST || REDIS_PORT) {
    redisClient = createRedisClient({
      socket: {
        host: REDIS_HOST,
        port: REDIS_PORT,
      },
    });
  } else {
    throw new Error("Must either set REDIS_URL or REDIS_HOST");
  }

  await redisClient.connect();
  await redisClient.setEx("connection-tester-test", 60, "test");
  const value = await redisClient.get("connection-tester-test");
  console.log("Connection test successful! (test value: ", value, ")");
  await redisClient.quit();
}

main();
