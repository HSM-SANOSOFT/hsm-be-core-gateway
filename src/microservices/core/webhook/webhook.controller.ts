import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { s } from 'src/config';

@Controller('webhook')
export class WebhookController {
  constructor(
    @Inject(s.hsm_be_has_cob_gdp_transaccion_name)
    private clientCob: ClientProxy,
  ) {}
  @Post('pagos-medios')
  pagosMedios() {
    return this.clientCob.send('webhook', {});
  }
}
