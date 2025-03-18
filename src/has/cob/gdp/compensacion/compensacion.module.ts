import { Module } from '@nestjs/common';
import { CompensacionController } from './compensacion.controller';

@Module({
  controllers: [CompensacionController]
})
export class CompensacionModule {}
