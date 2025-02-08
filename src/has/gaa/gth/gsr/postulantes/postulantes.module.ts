import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { PostulantesController } from './postulantes.controller';

@Module({
  controllers: [PostulantesController],
  imports: [
    ClientsModule.register([
      {
        name: envs.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_HOST,
          port: envs.HSM_BE_HAS_GAA_GTH_GSR_POSTULANTES_PORT,
        },
      },
    ]),
  ],
})
export class PostulantesModule {}
