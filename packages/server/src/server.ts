import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express'
import AppModule from './app/module'
import Settings from './settings'


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      // logger: new LoggerService(),
    }
  )
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api/v1');
  await app.listen(Settings.SERVER_PORT)
  Logger.log(`🚀  http://127.0.0.1:${Settings.SERVER_PORT}`)
}

bootstrap()
