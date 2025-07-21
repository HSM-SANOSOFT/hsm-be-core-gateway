import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

import { RecaudoController } from './recaudo.controller';

@Module({
  controllers: [RecaudoController],
  imports: [
    ClientsModule.register([
      {
        name: sNames.hsm_be_has_cob_gdp_recaudo_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_cob_gdp_recaudo_host,
        },
      },
    ]),
  ],
})
export class RecaudoModule {}
