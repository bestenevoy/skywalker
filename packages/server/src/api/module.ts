import { Module } from "@nestjs/common";
import { ServerController } from './controllers'

@Module({
  imports: [],
  controllers: [ServerController],
  providers: [],
})

export default class ApiModule { }