import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

import { DocumentosController } from './docs.controller';
@Module({
  controllers: [DocumentosController],
  imports: [
    ClientsModule.register([
      {
        name: envs.HSM_BE_CORE_DOCS_NAME,
        transport: Transport.TCP,
        options: {
          host: envs.HSM_BE_CORE_DOCS_HOST,
          port: envs.HSM_BE_CORE_DOCS_PORT,
        },
      },
    ]),
  ],
})
export class DocumentosModule {}
