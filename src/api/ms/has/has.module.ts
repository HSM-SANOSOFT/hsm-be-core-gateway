import { Module } from '@nestjs/common';

import { CobModule } from './cob/cob.module';
import { GaaModule } from './gaa/gaa.module';

@Module({
  imports: [GaaModule, CobModule],
})
export class HasModule {}
