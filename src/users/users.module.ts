import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.USERS_MICROSERVICE_NAME,
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

const logger = new Logger(`${envs.USERS_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.USERS_MICROSERVICE_NAME} on port ${envs.USERS_MICROSERVICE_PORT}`,
);
