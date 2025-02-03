import { Module } from '@nestjs/common';
import { TrabajosModule } from './trabajos/trabajos.module';
import { PostulantesModule } from './postulantes/postulantes.module';

@Module({
  imports: [TrabajosModule, PostulantesModule]
})
export class GsrModule {}
