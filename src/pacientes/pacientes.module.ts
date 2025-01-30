import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { PacientesController } from './pacientes.controller';

@Module({
  controllers: [PacientesController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.PERSONAL_MICROSERVICE_NAME,
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

const logger = new Logger(`${envs.PERSONAL_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.PERSONAL_MICROSERVICE_NAME} on port ${envs.PACIENTES_MICROSERVICE_PORT}`,
);
