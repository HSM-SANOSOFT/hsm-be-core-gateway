import { Module } from '@nestjs/common';
import { RecaudoController } from './recaudo.controller';

@Module({
  controllers: [RecaudoController]
})
export class RecaudoModule {}
