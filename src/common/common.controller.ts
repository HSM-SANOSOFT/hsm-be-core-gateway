import { Controller, Get, Inject } from '@nestjs/common';
import { envs } from 'config';

@Controller('common')
export class CommonController {
  constructor(@Inject(envs.COMMON_MICROSERVICE_NAME) private readonly Client) {}

  @Get('init/co')
  InitCo() {
    return 'Controller is up and running!';
  }

  @Get('init/ms')
  InitMS() {
    return this.Client.send('init', {});
  }
}
