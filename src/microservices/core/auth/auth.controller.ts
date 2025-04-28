import { Body, Controller, Inject, Param, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { s } from 'src/config';

@Controller('auth')
export class AuthController {
  constructor(@Inject(s.hsm_be_core_auth_name) private client: ClientProxy) {}

  @Post('pin/generation/:idDocs')
  pinGeneration(
    @Param('idDocs') idDocs: string,
    @Body('TIPO') TIPO: string,
    @Req() request: Request,
  ) {
    let ip = request.headers['x-forwarded-for'] || request.ip;
    if (typeof ip === 'string' && ip.includes(',')) {
      ip = ip.split(',')[0].trim();
    }
    return this.client.send('pinGeneration', { idDocs, TIPO, ip });
  }

  @Post('pin/validation/:idDocs')
  pinValidation(
    @Param('idDocs') idDocs: string,
    @Body('TIPO') TIPO: string,
    @Body('NUMERO_ENVIADO') NUMERO_ENVIADO: number,
    @Body('NUMERO_RECIBIDO') NUMERO_RECIBIDO: number,
    @Req() request: Request,
  ) {
    let ip = request.headers['x-forwarded-for'] || request.ip;
    if (typeof ip === 'string' && ip.includes(',')) {
      ip = ip.split(',')[0].trim();
    }
    return this.client.send('pinValidation', {
      idDocs,
      TIPO,
      NUMERO_RECIBIDO,
      ip,
    });
  }
}
