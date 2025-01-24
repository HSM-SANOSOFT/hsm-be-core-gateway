import {
  Body,
  Controller,
  Get,
  Inject,
  Ip,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import * as ms from 'config/services';
import { catchError } from 'rxjs';

import { AllPacienteDto } from './dto/allpaciente.dto';
import { RegistroCivilDto } from './dto/registroCivil.dto';
import { TablePacientesDto } from './dto/tablepacientes.dto';

@Controller('pacientes')
export class PacientesController {
  constructor(@Inject(ms.PACIENTES_SERVICE) private readonly client) {}

  private readonly logger = new Logger(PacientesController.name);

  @Get('init/co')
  InitCo() {
    return 'Controller is up and running!';
  }

  @Get('init/ms')
  InitMS() {
    return this.client.send('init', {}).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('allpaciente')
  allpaciente(@Body() allpacienteDto: AllPacienteDto) {
    return this.client.send('allpaciente', allpacienteDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('dataRCPaciente')
  dataRCPaciente(@Ip() ip: string, @Body() registroCivilDto: RegistroCivilDto) {
    ip = ip.includes('::ffff:') ? ip.split('::ffff:')[1] : ip;
    const payload = { ...registroCivilDto, ip };
    return this.client.send('dataRCPaciente', payload).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('updatepaciente')
  Updatepaciente(@Body() tablepacientesDto: TablePacientesDto) {
    return this.client.send('UpdatePaciente', tablepacientesDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('InsertarPaciente')
  InsertarPaciente(@Body() data: any) {
    return this.client.send('InsertarPaciente', data).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }


  @Post('categorizacionPaciente')
  categorizacionPaciente(@Body() data:any) {
    return this.client.send('categorizacionPaciente', data).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('getPaciente/:hc')
  GetPaciente(@Param('hc') hc: string) {
    return this.client.send('GetPaciente', { hc: hc }).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
