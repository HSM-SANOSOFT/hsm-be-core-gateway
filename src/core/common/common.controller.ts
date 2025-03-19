import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { envs } from 'src/config';

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
