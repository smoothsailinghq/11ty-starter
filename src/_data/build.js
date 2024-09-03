const timestamp = new Date()
const env = process.env.NODE_ENV

export default {
  env: env,
  dev: env !== 'production',
  timestamp: timestamp,
  id: timestamp.valueOf(),
}