import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { FarmaciaController } from './farmacia.controller';

@Module({
  controllers: [FarmaciaController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.FARMACIA_MICROSERVICE_NAME,
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

const logger = new Logger(`${envs.FARMACIA_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.FARMACIA_MICROSERVICE_NAME} on port ${envs.FARMACIA_MICROSERVICE_PORT}`,
);
