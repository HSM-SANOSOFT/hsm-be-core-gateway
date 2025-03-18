import { Module } from '@nestjs/common';
import { TransaccionController } from './transaccion.controller';

@Module({
  controllers: [TransaccionController]
})
export class TransaccionModule {}
