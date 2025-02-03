import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { FacturacionController } from './facturacion.controller';

@Module({
  controllers: [FacturacionController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: envs.FACTURACION_MICROSERVICE_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.FACTURACION_MICROSERVICE_HOST,
          port: envs.FACTURACION_MICROSERVICE_PORT,
        },
      },
    ]),
  ],
})
export class FacturacionModule {}

const logger = new Logger(`${envs.FACTURACION_MICROSERVICE_NAME}`);
logger.log(
  `Gateway is listening to ${envs.FACTURACION_MICROSERVICE_NAME} on port ${envs.FACTURACION_MICROSERVICE_PORT}`,
);
