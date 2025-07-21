import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    ClientsModule.register([
      {
        name: sNames.hsm_be_core_auth_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_auth_host,
        },
      },
    ]),
  ],
})
export class AuthModule {}
