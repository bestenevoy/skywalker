import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

import { Settings } from '../settings'
import { CorsMiddleware, LoggerMiddleware } from './middlewares'
import { AppController } from './controller';
import { AppService } from './service';
import ApiModule from '../api'

@Module({
  imports: [ApiModule],
  controllers: [AppController],
  providers: [AppService],
})

export default class AppModule {
  public configure (consumer: MiddlewareConsumer) {
    CorsMiddleware.configure({
      origin (requestOrigin: string | void, callback: CallableFunction) {
        // tslint:disable-next-line: no-null-keyword
        if (!requestOrigin || Settings.ALLOWED_ORIGINS.includes(requestOrigin)) callback(null, true)
        else callback(new Error('Not allowed by CORS'))
      },
    })
    consumer
      .apply(
        LoggerMiddleware,
        CorsMiddleware
      )
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      })
  }
}
