import type { Routes } from '@nestjs/core';

import { CoreModule } from './core.module';
export const CoreRoutes: Routes = [
  {
    path: '',
    module: CoreModule,
    children: [
      {
        path: '',
        children: [],
      },
    ],
  },
];
