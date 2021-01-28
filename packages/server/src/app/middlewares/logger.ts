import { Injectable, NestMiddleware, Logger } from '@nestjs/common'
import { Request, Response } from 'express'


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  public use (req: Request, res: Response, next: Function) {
    Logger.log('Request', req.originalUrl)
    next()
  }
}
