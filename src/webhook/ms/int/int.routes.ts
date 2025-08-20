import type { Routes } from '@nestjs/core';

import { IntModule } from './int.module';

export const IntRoutes: Routes = [
  {
    path: 'int',
    module: IntModule,
    children: [
      {
        path: '',
        children: [],
      },
    ],
  },
];
