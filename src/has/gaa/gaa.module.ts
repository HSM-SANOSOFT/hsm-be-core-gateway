import { Module } from '@nestjs/common';
import { GthModule } from './gth/gth.module';

@Module({
  imports: [GthModule]
})
export class GaaModule { }
