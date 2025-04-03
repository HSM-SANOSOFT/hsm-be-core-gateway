import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'src/config';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger();
  constructor(@Inject(envs.hsm_be_core_users) private client: ClientProxy) {}

  @Get(':IdDocs')
  getUser(@Param('IdDocs') IdDocs: string) {
    return this.client.send('getUser', IdDocs);
  }

  @Get('LOPD/:IdDocs')
  getUsersLOPD(@Param('IdDocs') IdDocs: string) {
    return this.client.send('getUsersLOPD', IdDocs);
  }

  @Post('LOPD')
  createUserLOPD(
    @Body('CEDULA') CEDULA: string,
    @Body('STATUS') STATUS: string,
    @Body('TIPO_ENVIO') TIPO_ENVIO: string,
  ) {
    return this.client.send('createUserLOPD', { CEDULA, STATUS, TIPO_ENVIO });
  }

  @Put('LOPD')
  updateUserLOPD(
    @Body('CEDULA') CEDULA: string,
    @Body('STATUS') STATUS: string,
    @Body('TIPO_ENVIO') TIPO_ENVIO: string,
  ) {
    return this.client.send('updateUserLOPD', { CEDULA, STATUS, TIPO_ENVIO });
  }
}
