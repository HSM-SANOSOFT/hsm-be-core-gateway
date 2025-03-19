import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { RecaudoController } from './recaudo.controller';

@Module({
  controllers: [RecaudoController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_has_cob_gdp_recaudo,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_cob_gdp_recaudo,
        },
      },
    ]),
  ],
})
export class RecaudoModule {}
