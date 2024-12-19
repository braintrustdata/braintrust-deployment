# Connection testers

While deploying Braintrust, you may need to troubleshoot connections to Redis and Postgres. This repo contains utilities that connect in a manner
that's very similar to the way Braintrust does, so you can use them to test your connections.

## Setup

Make sure you have Node.js >= 21 installed.

```
npm install
```

## Redis

```
REDIS_URL=<YOUR_REDIS_URL> npx tsx redis.ts
```

## Postgres

Coming soon!
