import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

import { CompensacionController } from './compensacion.controller';

@Module({
  controllers: [CompensacionController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_has_cob_gdp_compensacion,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_has_cob_gdp_compensacion,
        },
      },
    ]),
  ],
})
export class CompensacionModule {}
