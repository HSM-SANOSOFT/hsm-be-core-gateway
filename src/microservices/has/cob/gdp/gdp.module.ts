import { Module } from '@nestjs/common';

import { CompensacionModule } from './compensacion/compensacion.module';
import { RecaudoModule } from './recaudo/recaudo.module';
import { TransaccionModule } from './transaccion/transaccion.module';

@Module({
  imports: [TransaccionModule, CompensacionModule, RecaudoModule],
})
export class GdpModule {}
