import type { Routes } from '@nestjs/core';

import { HisModule } from './his.module';

export const HisRoutes: Routes = [
  {
    path: 'his',
    module: HisModule,
    children: [
      {
        path: '',
        children: [],
      },
    ],
  },
];
