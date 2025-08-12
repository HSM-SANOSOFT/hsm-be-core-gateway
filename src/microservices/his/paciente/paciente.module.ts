import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

import { PacienteController } from './paciente.controller';

@Module({
  controllers: [PacienteController],
  imports: [
    ClientsModule.register([
      {
        name: sNames.hsm_be_his_paciente,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_his_paciente_host,
        },
      },
    ]),
  ],
})
export class PacienteModule {}
