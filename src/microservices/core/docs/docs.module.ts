import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, s } from 'src/config';

import { DocumentosController } from './docs.controller';
@Module({
  controllers: [DocumentosController],
  imports: [
    ClientsModule.register([
      {
        name: s.hsm_be_core_docs_name,
        transport: Transport.TCP,
        options: {
          host: envs.hsm_be_core_docs_host,
        },
      },
    ]),
  ],
})
export class DocumentosModule {}
