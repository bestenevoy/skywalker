import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export default class ServerController {
  // constructor(private readonly appService: AppService) {}

  @Get('time')
  getIpInfo(): Object {
    return {time:new Date().toISOString()};
  }
}
