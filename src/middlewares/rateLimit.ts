import rateLimit from 'express-rate-limit'
import type { Request, Response } from 'express'
import { logger } from '@config/logger'
import { env } from '@config/env'

const isDev = env.NODE_ENV !== 'production'
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: isDev ? 5 : 150,
  handler: async (req: Request, res: Response, _next) => {
    const now = new Date()
    const date = now.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })

    const time = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
    const ip = req.ip === '::1' ? 'localhost' : req.ip
    const method = req.method
    const url = req.originalUrl
    const message = `Rate limit exceeded: [IP]: ${ip} [METHOD]: ${method} [URL]: ${url} DATE: ${date} - ${time}`
    logger.error(message)

    res.status(429).json({
      status: 'error',
      code: 'TOO_MANY_REQUESTS',
      message: 'Has superado el limite de peticiones, por favor, inténtalo de nuevo más tarde.'
    })
  },
  standardHeaders: true,
  legacyHeaders: false
})
