import { Module } from '@nestjs/common';

import { CompensacionController } from './controllers/compensacion.controller';
import { RecaudoController } from './controllers/recaudo.controller';
import { TransaccionController } from './controllers/transaccion.controller';

@Module({
  imports: [],
  controllers: [
    CompensacionController,
    RecaudoController,
    TransaccionController,
  ],
})
export class GdpModule {}
