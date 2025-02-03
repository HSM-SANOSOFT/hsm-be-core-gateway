import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthTokenGuard } from '../guards/auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthTokenGuard }],
  exports: [],
})
export class AppModule { }
