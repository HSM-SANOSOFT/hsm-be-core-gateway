import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { ComsController } from './coms.controller';

@Module({
  controllers: [ComsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.COMS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.COMS_MICROSERVICE_HOST,
          port: envs.COMS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class ComsModule {}

const logger = new Logger(`${ms.COMS_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.COMS_SERVICE} on port ${envs.COMS_MICROSERVICE_PORT}`,
);
