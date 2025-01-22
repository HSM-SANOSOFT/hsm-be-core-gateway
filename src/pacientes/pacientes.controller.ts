import { Body, Controller, Get, Inject, Post,Ip } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import * as ms from 'config/services';
import { catchError } from 'rxjs';

import { AllPacienteDto } from './dto/allpaciente.dto';
import { RegistroCivilDto } from './dto/registroCivil.dto';
import { TablePacientesDto } from './dto/tablepacientes.dto';
import { RegistroPacientesDto } from './dto/registropacientes.dto';


@Controller('pacientes')
export class PacientesController {
  constructor(@Inject(ms.PACIENTES_SERVICE) private readonly client) {}

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
  dataRCPaciente(@Ip() ip: string,@Body() registroCivilDto: RegistroCivilDto) {
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
  InsertarPaciente(@Body() registropacientesDto: RegistroPacientesDto) {
    return this.client.send('InsertarPaciente', registropacientesDto).pipe(
      catchError(err => {
        throw new RpcException(err);
      }),
    );
  }
}
