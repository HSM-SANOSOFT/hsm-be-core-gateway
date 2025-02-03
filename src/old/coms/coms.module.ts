import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { ComsController } from './coms.controller';

@Module({
  controllers: [ComsController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.COMS_MICROSERVICE_NAME,
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

const logger = new Logger(`${envs.COMS_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.COMS_MICROSERVICE_NAME} on port ${envs.COMS_MICROSERVICE_PORT}`,
);
