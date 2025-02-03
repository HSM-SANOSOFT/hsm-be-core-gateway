import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { MedicosController } from './medicos.controller';

@Module({
  controllers: [MedicosController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.MEDICOS_MICROSERVICE_NAME,
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

const logger = new Logger(`${envs.MEDICOS_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.MEDICOS_MICROSERVICE_NAME} on port ${envs.MEDICOS_MICROSERVICE_PORT}`,
);
