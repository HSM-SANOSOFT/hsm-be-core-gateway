import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

import { ComsController } from './coms.controller';

@Module({
  controllers: [ComsController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_core_coms,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_coms,
        },
      },
    ]),
  ],
})
export class ComsModule {}
