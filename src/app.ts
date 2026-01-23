import express, { type Request, type Response, type NextFunction } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import createError from 'http-errors'
import { pinoLogger } from '@/config/logger'

const app: express.Application = express()

app.use(helmet())
app.use(cors())
app.use(pinoLogger)
app.use(express.json({ limit: '15kb' }))

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
