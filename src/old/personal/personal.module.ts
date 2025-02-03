import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { PersonalController } from './personal.controller';

@Module({
  controllers: [PersonalController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.PERSONAL_MICROSERVICE_NAME,
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

const logger = new Logger(`${envs.PERSONAL_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.PERSONAL_MICROSERVICE_NAME} on port ${envs.PERSONAL_MICROSERVICE_PORT}`,
);
