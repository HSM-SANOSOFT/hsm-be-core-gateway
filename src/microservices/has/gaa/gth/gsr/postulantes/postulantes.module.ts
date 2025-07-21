import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

import { PostulantesController } from './postulantes.controller';

@Module({
  controllers: [PostulantesController],
  imports: [
    ClientsModule.register([
      {
        name: sNames.hsm_be_has_gaa_gth_gsr_postulantes_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_gaa_gth_gsr_postulantes_host,
        },
      },
    ]),
  ],
})
export class PostulantesModule {}
