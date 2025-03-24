import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'src/config';

@Controller('common')
export class CommonController {
  constructor(@Inject(envs.hsm_be_core_common) private client: ClientProxy) {}

  @Get('tipoAtencion')
  tipoAtencion() {
    return this.client.send('tipoAtencion', {});
  }

  @Get('tipoServiciosChat')
  tipoServiciosChat() {
    return this.client.send('tipoServiciosChat', {});
  }
}
