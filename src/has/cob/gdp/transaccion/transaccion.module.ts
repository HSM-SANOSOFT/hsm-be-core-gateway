import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { TransaccionController } from './transaccion.controller';

@Module({
  controllers: [TransaccionController],
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
export class TransaccionModule {}
