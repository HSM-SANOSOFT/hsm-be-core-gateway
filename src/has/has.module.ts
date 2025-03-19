import { Module } from '@nestjs/common';

import { AdmModule } from './adm/adm.module';
import { CoaModule } from './coa/coa.module';
import { CobModule } from './cob/cob.module';
import { FacModule } from './fac/fac.module';
import { GaaModule } from './gaa/gaa.module';
import { GfnModule } from './gfn/gfn.module';
import { MkvModule } from './mkv/mkv.module';

@Module({
  imports: [
    GaaModule,
    CobModule,
    MkvModule,
    GfnModule,
    FacModule,
    CoaModule,
    AdmModule,
  ],
})
export class HasModule {}
