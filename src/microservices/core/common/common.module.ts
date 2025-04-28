import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, s } from 'src/config';

import { CommonController } from './common.controller';

@Module({
  controllers: [CommonController],
  imports: [
    ClientsModule.register([
      {
        name: s.hsm_be_core_common_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_common_host,
        },
      },
    ]),
  ],
})
export class CommonModule {}
