import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { PacientesController } from './pacientes.controller';

@Module({
  controllers: [PacientesController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.PACIENTES_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.PACIENTES_MICROSERVICE_HOST,
          port: envs.PACIENTES_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class PacientesModule {}

const logger = new Logger(`${ms.PACIENTES_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.PACIENTES_SERVICE} on port ${envs.PACIENTES_MICROSERVICE_PORT}`,
);
