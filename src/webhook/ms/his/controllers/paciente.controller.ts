import {
  BadRequestException,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { sNames } from 'src/config';

@Controller('Paciente')
export class PacienteController {
  constructor(
    @Inject(sNames.hsm_be_his_paciente) private client: ClientProxy,
  ) {}
}
