import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { HospitalizacionController } from './hospitalizacion.controller';

@Module({
  controllers: [HospitalizacionController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.HOSPITALIZACION_SERVICE,
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

const logger = new Logger(`${ms.HOSPITALIZACION_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.HOSPITALIZACION_SERVICE} on port ${envs.HOSPITALIZACION_MICROSERVICE_PORT}`,
);
