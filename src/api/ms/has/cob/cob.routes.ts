import type { Routes } from '@nestjs/core';

import { GdpRoutes } from './gdp/gdp.routes';

export const CobRoutes: Routes = [
  {
    path: 'cob',
    children: [...GdpRoutes],
  },
];
