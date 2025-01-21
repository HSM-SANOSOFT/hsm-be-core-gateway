import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { CommonController } from './common.controller';

@Module({
  controllers: [CommonController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.COMMON_MICROSERVICE_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.COMMON_MICROSERVICE_HOST,
          port: envs.COMMON_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class CommonModule {}

const logger = new Logger(`${envs.COMMON_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.COMMON_MICROSERVICE_NAME} on port ${envs.COMMON_MICROSERVICE_PORT}`,
);
