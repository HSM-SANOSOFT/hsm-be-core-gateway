import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { HospitalizacionController } from './hospitalizacion.controller';

@Module({
  controllers: [HospitalizacionController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.HOSPITALIZACION_MICROSERVICE_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.HOSPITALIZACION_MICROSERVICE_HOST,
          port: envs.HOSPITALIZACION_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class HospitalizacionModule {}

const logger = new Logger(`${envs.HOSPITALIZACION_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.HOSPITALIZACION_MICROSERVICE_NAME} on port ${envs.HOSPITALIZACION_MICROSERVICE_PORT}`,
);
