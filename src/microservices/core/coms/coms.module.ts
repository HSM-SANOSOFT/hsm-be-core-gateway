import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, s } from 'src/config';

import { ComsController } from './coms.controller';

@Module({
  controllers: [ComsController],
  imports: [
    ClientsModule.register([
      {
        name: s.hsm_be_core_coms_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_coms_host,
        },
      },
    ]),
  ],
})
export class ComsModule {}
