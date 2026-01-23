import 'dotenv/config'
import { z } from 'zod'
import { logger } from './logger'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('production'),
  PORT: z.coerce.number().default(3000)
})

const result = envSchema.safeParse(process.env)

if (!result.success) {
  const errorMessage = result.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join(', ')
  logger.error(`Invalid environment variables: ${errorMessage}`)
  process.exit(1)
}

export const env = result.data
