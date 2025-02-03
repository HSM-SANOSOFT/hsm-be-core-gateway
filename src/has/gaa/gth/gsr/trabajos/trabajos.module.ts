import { Module } from '@nestjs/common';
import { TrabajosController } from './trabajos.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'config';

@Module({
  controllers: [TrabajosController],
  imports: [ClientsModule.register([
    {
      name: envs.HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_NAME,
      transport: Transport.TCP,
      options: {
        host: envs.HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_HOST,
        port: envs.HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_PORT
      }
    }
  ])],
})
export class TrabajosModule { }
