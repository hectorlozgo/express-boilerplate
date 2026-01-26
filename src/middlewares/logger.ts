import type { Request, Response, NextFunction } from 'express'
import pino from 'pino'

export const logger = pino({
  level: 'debug',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      singleLine: true,
      translateTime: 'HH:MM:ss:ms',
      ignore: 'req,res,pid,hostname,reqId,responseTime'
    }
  }
})

export function pinoLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now()

  res.on('finish', () => {
    const ms = Date.now() - start
    const status = res.statusCode
    const message = `${req.method} | ${status} | ${req.originalUrl} | ${ms} ms`
    const level = status >= 500 ? 'error' : status >= 400 ? 'warn' : 'info'
    logger[level](message)
  })

  next()
}
