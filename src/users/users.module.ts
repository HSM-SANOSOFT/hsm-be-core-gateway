import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.USERS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.USERS_MICROSERVICE_HOST,
          port: envs.USERS_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class UsersModule {}

const logger = new Logger(`${ms.USERS_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.USERS_SERVICE} on port ${envs.USERS_MICROSERVICE_PORT}`,
);
