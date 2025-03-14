import { Body, Controller, Inject, Param, Post, Req } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { Request } from 'express';
import { catchError } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(envs.HSM_BE_CORE_AUTH_NAME) private client: ClientProxy,
  ) {}

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
    return this.client.send('pinGeneration', { idDocs, TIPO, ip }).pipe(
      catchError(err => {
        throw new RpcException(err as object);
      }),
    );
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
    return this.client
      .send('pinValidation', {
        idDocs,
        TIPO,
        NUMERO_RECIBIDO,
        ip,
      })
      .pipe(
        catchError(err => {
          throw new RpcException(err as object);
        }),
      );
  }
}
