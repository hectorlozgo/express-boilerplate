import http from 'node:http'
import app from '@/app'
import { env } from '@/config/env'
import { logger } from '@/middlewares/logger'

const server = http.createServer(app)

function bootstrap() {
  server.listen(env.PORT, () => {
    logger.info(`[MODE: ${env.NODE_ENV}] Server listening in http://localhost:${env.PORT}`)
  })
}
bootstrap()
