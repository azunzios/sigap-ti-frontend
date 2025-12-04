import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.REDIS_TOKEN,
});

export default async function handler(req, res) {
  const count = await redis.incr("visitor_count");
  return res.status(200).json({ visitors: count });
}
