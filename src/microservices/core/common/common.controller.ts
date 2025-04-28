import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { s } from 'src/config';

@Controller('common')
export class CommonController {
  constructor(@Inject(s.hsm_be_core_common_name) private client: ClientProxy) {}

  @Get('tipoAtencion')
  tipoAtencion() {
    return this.client.send('tipoAtencion', {});
  }

  @Get('tipoServiciosChat')
  tipoServiciosChat() {
    return this.client.send('tipoServiciosChat', {});
  }
}
