import http from 'node:http'
import app from './app'
import { env } from './config/env'
import { logger } from './config/logger'

const server = http.createServer(app)

function bootstrap() {
  server.listen(env().port, () => {
    logger.info(`[MODE: ${env().mode}] Server listening in http://localhost:${env().port}`)
  })
}
bootstrap()
