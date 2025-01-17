import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { MedicosController } from './medicos.controller';

@Module({
  controllers: [MedicosController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.MEDICOS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.MEDICOS_MICROSERVICE_HOST,
          port: envs.MEDICOS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class MedicosModule {}

const logger = new Logger(`${ms.MEDICOS_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.MEDICOS_SERVICE} on port ${envs.MEDICOS_MICROSERVICE_PORT}`,
);
