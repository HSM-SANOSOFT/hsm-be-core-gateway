import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { catchError } from 'rxjs';

@Controller('common')
export class CommonController {
  constructor(@Inject(envs.hsm_be_core_common) private client: ClientProxy) {}

  @Get('tipoAtencion')
  tipoAtencion() {
    return this.client.send('tipoAtencion', {}).pipe(
      catchError(err => {
        throw new RpcException(err as object);
      }),
    );
  }
}
