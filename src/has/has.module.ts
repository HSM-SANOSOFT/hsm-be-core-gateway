import { Module } from '@nestjs/common';
import { GaaModule } from './gaa/gaa.module';

@Module({
  imports: [GaaModule]
})
export class HasModule {}
