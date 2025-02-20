import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { catchError } from 'rxjs';

@Controller('coms')
export class ComsController {
  @Inject(envs.HSM_BE_CORE_COMS_NAME)
  private client: ClientProxy;
  @Post('/sendSMS')
  sendSMS(@Body() data: any) {
    console.log('data', data);
    return this.client.send('sendSMS', data).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
