import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    ClientsModule.register([
      {
        name: envs.HSM_BE_CORE_AUTH_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.HSM_BE_CORE_AUTH_HOST,
          port: envs.HSM_BE_CORE_AUTH_PORT,
        },
      },
    ]),
  ],
})
export class AuthModule {}
