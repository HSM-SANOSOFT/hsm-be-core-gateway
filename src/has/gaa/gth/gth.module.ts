import { Module } from '@nestjs/common';
import { GsrModule } from './gsr/gsr.module';

@Module({
  imports: [GsrModule]
})
export class GthModule {}
