import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';

import { DocumentosController } from './docs.controller';
@Module({
  controllers: [DocumentosController],
  imports: [
    ClientsModule.register([
      {
        name: envs.hsm_be_core_docs,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_docs,
        },
      },
    ]),
  ],
})
export class DocumentosModule {}
