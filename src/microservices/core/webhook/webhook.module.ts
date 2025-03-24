import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

import { WebhookController } from './webhook.controller';

@Module({
  controllers: [WebhookController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_has_cob_gdp_transaccion,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_cob_gdp_transaccion,
        },
      },
    ]),
  ],
})
export class WebhookModule {}
