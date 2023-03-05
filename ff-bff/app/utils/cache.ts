import redisClient from "~/libs/redis"

const EXPIRATION_TIME = 60

export const get = async (key: string) => {
  const value = await redisClient.getex(key)
  return value && JSON.parse(value)
}

export const set = async (key: string, value: any) => {
  redisClient.set(key, JSON.stringify(value), 'EX', EXPIRATION_TIME)
}