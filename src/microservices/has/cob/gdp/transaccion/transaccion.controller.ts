import { Body, Controller, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { s } from 'src/config';

import { SolicitudPagoDto } from './dto';

@Controller('transaccion')
export class TransaccionController {
  constructor(
    @Inject(s.hsm_be_has_cob_gdp_transaccion_name) private client: ClientProxy,
  ) {}

  @Post('solicitudPago/:numDocId')
  createSolicitudPago(
    @Param('numDocId') numDocId: string,
    @Body()
    body: SolicitudPagoDto,
  ) {
    return this.client.send('createSolicitudPago', { numDocId, ...body });
  }
}
