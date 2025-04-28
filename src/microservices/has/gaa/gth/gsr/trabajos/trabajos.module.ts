import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, s } from 'src/config';

import { TrabajosController } from './trabajos.controller';

@Module({
  controllers: [TrabajosController],
  imports: [
    ClientsModule.register([
      {
        name: s.hsm_be_has_gaa_gth_gsr_trabajos_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_gaa_gth_gsr_trabajos_host,
        },
      },
    ]),
  ],
})
export class TrabajosModule {}
