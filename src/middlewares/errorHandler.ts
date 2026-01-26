import type { Request, Response, NextFunction } from 'express'
import createError, { isHttpError } from 'http-errors'
import { env } from '@/config/env'

export class ErrorHandler {
  static notFound = (_req: Request, _res: Response, next: NextFunction) => {
    next(createError(404))
  }

  static handle = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    const status = isHttpError(err) ? err.status : 500
    const message = err instanceof Error ? err.message : 'Internal Server Error'
    const isDev = env.NODE_ENV !== 'production'
    const details: Record<string, unknown> = {
      status,
      message,
      ...(isDev && err instanceof Error ? { stack: err.stack } : {})
    }

    res.status(status).json(details)
  }
}
