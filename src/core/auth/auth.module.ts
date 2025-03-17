import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_core_auth,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_auth,
        },
      },
    ]),
  ],
})
export class AuthModule {}
