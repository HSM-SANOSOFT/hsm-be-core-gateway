import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_core_users,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_users,
        },
      },
    ]),
  ],
})
export class UsersModule {}
