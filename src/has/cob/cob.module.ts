import { Module } from '@nestjs/common';
import { GdpModule } from './gdp/gdp.module';

@Module({
  imports: [GdpModule]
})
export class CobModule {}
