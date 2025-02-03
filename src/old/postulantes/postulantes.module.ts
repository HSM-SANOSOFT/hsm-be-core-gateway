import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { PostulantesController } from './postulantes.controller';

@Module({
  controllers: [PostulantesController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: 'POSTULANTES_SERVICE',
        transport: Transport.TCP,
        options: {
          host: envs.POSTULANTES_MICROSERVICE_HOST,
          port: envs.POSTULANTES_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class PostulantesModule {}
