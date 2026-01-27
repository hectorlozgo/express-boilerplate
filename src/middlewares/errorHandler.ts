import type { Request, Response, NextFunction } from 'express'
import createError, { isHttpError, type HttpError } from 'http-errors'
import { env } from '@/config/env'
import { ValidationError } from '@/validators/validationError'
import { logger } from './logger'

export class ErrorHandler {
  public static notFound = (_req: Request, _res: Response, next: NextFunction) => {
    next(createError(404))
  }

  private static handleValidationError(err: ValidationError, res: Response) {
    logger.warn({ errors: err.errors }, `Fallo de validación: ${err.message}`)

    res.status(err.status).json({
      status: err.status,
      message: err.message,
      errors: err.errors
    })
  }

  private static handleHttpError(err: HttpError, res: Response) {
    const status = err.status ?? 500
    if (status >= 500) {
      logger.error({ stack: err.stack }, `Error de servidor: ${err.message}`)
    }

    res.status(status).json({
      status,
      message: status >= 500 ? 'Internal Server Error' : err.message
    })
  }

  private static handleGenericError(err: Error, res: Response) {
    logger.error({ name: err.name, message: err.message, stack: err.stack }, `Error Not Controlled: ${err.message}`)

    res.status(500).json({
      status: 500,
      message: 'Internal Server Error',
      ...(env.NODE_ENV !== 'production' && { details: err.message, stack: err.stack })
    })
  }

  public static handle = (err: unknown, req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof ValidationError) return ErrorHandler.handleValidationError(err, res)
    if (isHttpError(err)) return ErrorHandler.handleHttpError(err, res)
    if (err instanceof Error) return ErrorHandler.handleGenericError(err, res)

    // Fallback unknown error
    logger.error(
      { unknownError: err },
      `Unknown Throw Error: ${req.method} | ${req.originalUrl} | ${JSON.stringify(err)}`
    )
    res.status(500).json({ status: 500, message: 'Unknown Error' })
  }
}
