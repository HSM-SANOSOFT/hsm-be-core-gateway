import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'src/config';

@Controller('webhook')
export class WebhookController {
  constructor(
    @Inject(envs.hsm_be_has_cob_gdp_transaccion) private clientCob: ClientProxy,
  ) {}
  @Post('pagos-medios')
  pagosMedios() {
    return this.clientCob.send('webhook', {});
  }
}
