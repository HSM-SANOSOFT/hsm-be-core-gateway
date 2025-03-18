import { Module } from '@nestjs/common';
import { TransaccionModule } from './transaccion/transaccion.module';
import { CompensacionModule } from './compensacion/compensacion.module';
import { RecaudoModule } from './recaudo/recaudo.module';

@Module({
  imports: [TransaccionModule, CompensacionModule, RecaudoModule]
})
export class GdpModule {}
