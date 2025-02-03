import { Module } from '@nestjs/common';
import { PostulantesController } from './postulantes.controller';

@Module({
  controllers: [PostulantesController]
})
export class PostulantesModule {}
