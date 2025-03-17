import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { CommonController } from './common.controller';

@Module({
  controllers: [CommonController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_core_common,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_common,
        },
      },
    ]),
  ],
})
export class CommonModule {}
