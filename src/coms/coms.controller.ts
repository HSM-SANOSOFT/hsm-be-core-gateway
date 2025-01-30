import { Body, Controller, Get, Inject, Ip, Post } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { Public } from 'decorators/public.decorator';
import { catchError } from 'rxjs';

import { PasswordChangeDto } from './dto/passwordchange.dto';

@Controller('coms')
export class ComsController {
  constructor(@Inject(envs.COMS_MICROSERVICE_NAME) private readonly Client) {}

  @Get('init/co')
  InitCo() {
    return 'Controller is up and running!';
  }

  @Get('init/ms')
  InitMS() {
    return this.Client.send('init', {});
  }

  @Public()
  @Post('passwordChange')
  passwordChange(
    @Ip() ip: string,
    @Body() passwordchangeDto: PasswordChangeDto,
  ) {
    ip = ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip;
    const { username } = passwordchangeDto;
    const payload = { username, ip };
    return this.Client.send('passwordChange', payload).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
