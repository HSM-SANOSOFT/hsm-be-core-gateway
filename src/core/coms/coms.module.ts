import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { ComsController } from './coms.controller';

@Module({
  controllers: [ComsController],
  imports: [
    ClientsModule.register([
      {
        name: envs.HSM_BE_CORE_COMS_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.HSM_BE_CORE_COMS_HOST,
          port: envs.HSM_BE_CORE_COMS_PORT,
        },
      },
    ]),
  ],
})
export class ComsModule {}
