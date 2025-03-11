import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { envs } from 'config';
import { catchError } from 'rxjs';

@Controller('users')
export class UsersController {
  @Inject(envs.HSM_BE_CORE_USERS_NAME) private client: ClientProxy;

  @Get(':IdDocs')
  getUser(@Param('IdDocs') IdDocs: string) {
    return this.client.send('getUser', IdDocs).pipe(
      catchError(err => {
        throw new RpcException(err as object);
      }),
    );
  }

  @Get('LOPD/:IdDocs')
  getUsersLOPD(@Param('IdDocs') IdDocs: string) {
    return this.client.send('getUsersLOPD', IdDocs).pipe(
      catchError(err => {
        throw new RpcException(err as object);
      }),
    );
  }

  @Post('LOPD')
  createUserLOPD(
    @Body('CEDULA') CEDULA: string,
    @Body('STATUS') STATUS: string,
    @Body('TIPO_ENVIO') TIPO_ENVIO: string,
  ) {
    return this.client
      .send('createUserLOPD', { CEDULA, STATUS, TIPO_ENVIO })
      .pipe(
        catchError(err => {
          throw new RpcException(err as object);
        }),
      );
  }

  @Put('LOPD')
  updateUserLOPD(
    @Body('CEDULA') CEDULA: string,
    @Body('STATUS') STATUS: string,
    @Body('TIPO_ENVIO') TIPO_ENVIO: string,
  ) {
    return this.client
      .send('updateUserLOPD', { CEDULA, STATUS, TIPO_ENVIO })
      .pipe(
        catchError(err => {
          throw new RpcException(
            typeof err === 'string' ? err : JSON.stringify(err),
          );
        }),
      );
  }
}
