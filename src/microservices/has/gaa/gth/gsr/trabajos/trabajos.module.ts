import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

import { TrabajosController } from './trabajos.controller';

@Module({
  controllers: [TrabajosController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_has_gaa_gth_gsr_trabajos,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_gaa_gth_gsr_trabajos,
        },
      },
    ]),
  ],
})
export class TrabajosModule {}
