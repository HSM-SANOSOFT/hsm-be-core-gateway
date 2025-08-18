import type { Routes } from '@nestjs/core';

import { GthRoutes } from './gth/gth.routes';

export const GaaRoutes: Routes = [
  {
    path: 'gaa',
    children: [...GthRoutes],
  },
];
