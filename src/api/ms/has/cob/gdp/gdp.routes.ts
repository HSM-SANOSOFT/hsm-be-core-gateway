import type { Routes } from '@nestjs/core';

import { GdpModule } from './gdp.module';

export const GdpRoutes: Routes = [
  {
    path: 'gdp',
    module: GdpModule,
  },
];
