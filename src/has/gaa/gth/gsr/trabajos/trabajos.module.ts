import { Module } from '@nestjs/common';
import { TrabajosController } from './trabajos.controller';

@Module({
  controllers: [TrabajosController]
})
export class TrabajosModule {}
