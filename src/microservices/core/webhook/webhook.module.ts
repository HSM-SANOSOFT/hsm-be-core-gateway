import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

import { WebhookController } from './webhook.controller';

@Module({
  controllers: [WebhookController],
  imports: [
    ClientsModule.register([
      {
        name: sNames.hsm_be_has_cob_gdp_transaccion_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_cob_gdp_transaccion_host,
        },
      },
    ]),
  ],
})
export class WebhookModule {}
