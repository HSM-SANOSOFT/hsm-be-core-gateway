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
import { sNames } from 'src/config';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger();
  constructor(
    @Inject(sNames.hsm_be_core_users_name) private client: ClientProxy,
  ) {}

  @Get(':IdDocs')
  getUser(@Param('IdDocs') IdDocs: string) {
    this.logger.debug(`Fetching user with ID: ${IdDocs}`);
    return this.client.send('getUser', IdDocs);
  }

  @Get('LOPD/:IdDocs')
  getUsersLOPD(@Param('IdDocs') IdDocs: string) {
    this.logger.debug(`Fetching LOPD user with ID: ${IdDocs}`);
    return this.client.send('getUsersLOPD', IdDocs);
  }

  @Post('LOPD')
  createUserLOPD(
    @Body('CEDULA') CEDULA: string,
    @Body('STATUS') STATUS: string,
    @Body('TIPO_ENVIO') TIPO_ENVIO: string,
  ) {
    this.logger.debug(`Creating LOPD user with CEDULA: ${CEDULA}, STATUS: ${STATUS}, TIPO_ENVIO: ${TIPO_ENVIO}`);
    return this.client.send('createUserLOPD', { CEDULA, STATUS, TIPO_ENVIO });
  }

  @Put('LOPD')
  updateUserLOPD(
    @Body('CEDULA') CEDULA: string,
    @Body('STATUS') STATUS: string,
    @Body('TIPO_ENVIO') TIPO_ENVIO: string,
  ) {
    this.logger.debug(`Updating LOPD user with CEDULA: ${CEDULA}, STATUS: ${STATUS}, TIPO_ENVIO: ${TIPO_ENVIO}`);
    return this.client.send('updateUserLOPD', { CEDULA, STATUS, TIPO_ENVIO });
  }
}
