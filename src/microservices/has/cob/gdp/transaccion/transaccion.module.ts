import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, s } from 'src/config';

import { TransaccionController } from './transaccion.controller';

@Module({
  controllers: [TransaccionController],
  imports: [
    ClientsModule.register([
      {
        name: s.hsm_be_has_cob_gdp_transaccion_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_cob_gdp_transaccion_host,
        },
      },
    ]),
  ],
})
export class TransaccionModule {}
