import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { ExamenesController } from './examenes.controller';

@Module({
  controllers: [ExamenesController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.EXAMENES_SERVICE,
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

const logger = new Logger(`${ms.EXAMENES_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.EXAMENES_SERVICE} on port ${envs.EXAMENES_MICROSERVICE_PORT}`,
);
