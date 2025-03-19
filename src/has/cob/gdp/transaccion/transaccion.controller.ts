import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'src/config';

import { SolicitudPagoDto } from './dto';

@Controller('transaccion')
export class TransaccionController {
  constructor(
    @Inject(envs.hsm_be_has_cob_gdp_transaccion) private client: ClientProxy,
  ) {}

  @Post('solicitudPago/:numDocId')
  getLink(
    @Param('numDocId') numDocId: string,
    @Body()
    body: SolicitudPagoDto,
  ) {
    return this.client.send('solicitudPago', body);
  }
}
