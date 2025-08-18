import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { ApiController } from './api.controller';
import { CoreModule } from './ms/core/core.module';
import { CoreRoutes } from './ms/core/core.routes';
import { HasModule } from './ms/has/has.module';
import { HasRoutes } from './ms/has/has.routes';
import { HisModule } from './ms/his/his.module';
import { HisRoutes } from './ms/his/his.routes';

@Module({
  imports: [
    HasModule,
    CoreModule,
    HisModule,
    RouterModule.register([
      {
        path: 'api',
        children: [...CoreRoutes, ...HasRoutes, ...HisRoutes],
      },
    ]),
  ],
  controllers: [ApiController],
})
export class ApiModule {}
