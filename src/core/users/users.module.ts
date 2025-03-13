import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      {
        name: envs.HSM_BE_CORE_USERS_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.HSM_BE_CORE_USERS_HOST,
          port: envs.HSM_BE_CORE_USERS_PORT,
        },
      },
    ]),
  ],
})
export class UsersModule {}
