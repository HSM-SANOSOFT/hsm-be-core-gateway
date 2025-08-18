import type { Routes } from '@nestjs/core';

import { CobRoutes } from './cob/cob.routes';
import { GaaRoutes } from './gaa/gaa.routes';

export const HasRoutes: Routes = [
  {
    path: 'has',
    children: [...CobRoutes, ...GaaRoutes],
  },
];
