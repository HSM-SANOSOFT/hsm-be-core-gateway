import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { s } from 'src/config';

@Controller('trabajos')
export class TrabajosController {
  @Inject(s.hsm_be_has_gaa_gth_gsr_trabajos_name)
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
