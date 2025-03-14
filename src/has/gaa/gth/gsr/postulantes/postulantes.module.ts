import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { PostulantesController } from './postulantes.controller';

@Module({
  controllers: [PostulantesController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_has_gaa_gth_gsr_postulantes,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_gaa_gth_gsr_postulantes,
        },
      },
    ]),
  ],
})
export class PostulantesModule {}
