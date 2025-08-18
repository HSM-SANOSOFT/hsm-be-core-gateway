import type { Routes } from '@nestjs/core';

import { GsrModule } from './gsr.module';

export const GsrRoutes: Routes = [
  {
    path: 'gsr',
    module: GsrModule,
  },
];
