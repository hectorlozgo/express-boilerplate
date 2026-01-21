import express, { type Request, type Response, type NextFunction } from 'express'
import cors from 'cors'
import createError from 'http-errors'
import { pinoLogger } from './config/logger'

const app: express.Application = express()

app.use(pinoLogger)
app.use(cors())
app.use(express.json())
app.disable('x-powered-by')

// not found
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createError(404))
})

// errors handler
app.use((err: createError.HttpError, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500
  res.status(status).json({
    status: 'Error',
    message: err.message || 'Internal Server Error'
  })
})

export default app
