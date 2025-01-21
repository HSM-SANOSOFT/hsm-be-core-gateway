import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { PersonalController } from './personal.controller';

@Module({
  controllers: [PersonalController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.PERSONAL_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.PERSONAL_MICROSERVICE_HOST,
          port: envs.PERSONAL_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class PersonalModule {}

const logger = new Logger(`${ms.PERSONAL_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.PERSONAL_SERVICE} on port ${envs.PERSONAL_MICROSERVICE_PORT}`,
);
