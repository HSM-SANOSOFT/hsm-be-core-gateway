import type { Routes } from '@nestjs/core';

import { GsrRoutes } from './gsr/gsr.routes';

export const GthRoutes: Routes = [
  {
    path: 'gth',
    children: [...GsrRoutes],
  },
];
