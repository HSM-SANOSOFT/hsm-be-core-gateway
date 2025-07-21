import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

import { ComsController } from './coms.controller';

@Module({
  controllers: [ComsController],
  imports: [
    ClientsModule.register([
      {
        name: sNames.hsm_be_core_coms_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_coms_host,
        },
      },
    ]),
  ],
})
export class ComsModule {}
