import http from 'node:http'
import 'dotenv/config'
import app from './app'
import { env } from './config/env'

const server = http.createServer(app)

function bootstrap() {
  server.listen(() => {
    console.info(`[MODE: ${env().mode}] Server listening in http://localhost:${env().port}`)
  })
}
bootstrap()
