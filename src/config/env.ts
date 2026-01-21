import 'dotenv/config'

export const env = () => {
  const env = process.env
  return {
    mode: env.NODE_ENV || 'production',
    port: env.PORT ?? 3000
  }
}
