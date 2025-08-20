import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';

import { IntModule } from './ms/int/int.module';
import { IntRoutes } from './ms/int/int.routes';

@Module({
  imports: [
    IntModule,
    RouterModule.register([{ path: 'webhook', children: IntRoutes }]),
  ],
})
export class WebhookModule {}
