import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, s } from 'src/config';

import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      {
        name: s.hsm_be_core_users_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_users_host,
        },
      },
    ]),
  ],
})
export class UsersModule {}
