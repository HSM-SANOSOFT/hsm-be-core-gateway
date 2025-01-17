import { Logger, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';
import * as ms from 'config/services';

import { FacturacionController } from './facturacion.controller';

@Module({
  controllers: [FacturacionController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ms.FACTURACION_SERVICE,
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

const logger = new Logger(`${ms.FACTURACION_SERVICE}`);
logger.log(
  `Gateway is listening to ${ms.FACTURACION_SERVICE} on port ${envs.FACTURACION_MICROSERVICE_PORT}`,
);
