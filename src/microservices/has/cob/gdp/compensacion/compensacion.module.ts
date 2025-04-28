import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, s } from 'src/config';

import { CompensacionController } from './compensacion.controller';

@Module({
  controllers: [CompensacionController],
  imports: [
    ClientsModule.register([
      {
        name: s.hsm_be_has_cob_gdp_compensacion_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_cob_gdp_compensacion_host,
        },
      },
    ]),
  ],
})
export class CompensacionModule {}
