import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { FarmaciaController } from './farmacia.controller';

@Module({
  controllers: [FarmaciaController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.FARMACIA_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.FARMACIA_MICROSERVICE_HOST,
          port: envs.FARMACIA_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class FarmaciaModule {}

const logger = new Logger(`${ms.FARMACIA_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.FARMACIA_SERVICE} on port ${envs.FARMACIA_MICROSERVICE_PORT}`,
);
