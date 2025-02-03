import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { ExamenesController } from './examenes.controller';

@Module({
  controllers: [ExamenesController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.EXAMENES_MICROSERVICE_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.EXAMENES_MICROSERVICE_HOST,
          port: envs.EXAMENES_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class ExamenesModule {}

const logger = new Logger(`${envs.EXAMENES_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.EXAMENES_MICROSERVICE_NAME} on port ${envs.EXAMENES_MICROSERVICE_PORT}`,
);
