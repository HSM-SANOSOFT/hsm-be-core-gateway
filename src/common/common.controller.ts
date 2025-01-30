import { Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy, Payload } from '@nestjs/microservices';
import { envs } from 'config';

import { OcupacionesDto } from './dto/ocupaciones.dto';
import { ParroquiasDto } from './dto/parroquias.dto';
import { PromocionesDto } from './dto/promociones.dto';
import { ValidaCedulaDto } from './dto/validacedula.dto';

@Controller('common')
export class CommonController {
  constructor(
    @Inject(envs.COMMON_MICROSERVICE_NAME) private readonly client: ClientProxy,
  ) {}

  @Get('init/co')
  InitCo() {
    return 'Controller is up and running!';
  }

  @Get('init/ms')
  InitMS() {
    return this.client.send('initMS', {});
  }

  @Get('combobox')
  combobox() {
    return this.client.send('combobox', {});
  }

  @Post('promociones')
  promociones(@Payload() promocionesDto: PromocionesDto) {
    return this.client.send('promociones', promocionesDto);
  }

  @Post('parroquias')
  parroquias(@Payload() parroquiasDto: ParroquiasDto) {
    return this.client.send('parroquias', parroquiasDto);
  }

  @Post('validarCedula')
  validarCedula(@Payload() validacedulaDto: ValidaCedulaDto) {
    return this.client.send('validarCedula', validacedulaDto);
  }

  @Post('ocupaciones')
  ocupaciones(@Payload() ocupacionesDto: OcupacionesDto) {
    return this.client.send('ocupaciones', ocupacionesDto);
  }
}
