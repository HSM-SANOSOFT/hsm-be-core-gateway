import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, sNames } from 'src/config';

import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      {
        name: sNames.hsm_be_core_users_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_users_host,
        },
      },
    ]),
  ],
})
export class UsersModule {}
