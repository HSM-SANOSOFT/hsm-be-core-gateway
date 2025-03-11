import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { envs } from 'config';

@Controller('trabajos')
export class TrabajosController {
  @Inject(envs.HSM_BE_HAS_GAA_GTH_GSR_TRABAJOS_NAME)
  private client: ClientProxy;

  @Get()
  findAll(): string {
    return 'todas las ofertas de trabajo';
  }

  @Get(':id')
  findOne(): string {
    return 'una oferta de trabajo';
  }
}
