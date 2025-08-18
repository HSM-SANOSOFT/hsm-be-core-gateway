import { Module } from '@nestjs/common';

import { PostulantesController } from './controllers/postulantes.controller';
import { TrabajosController } from './controllers/trabajos.controller';

@Module({
  imports: [],
  controllers: [TrabajosController, PostulantesController],
})
export class GsrModule {}
