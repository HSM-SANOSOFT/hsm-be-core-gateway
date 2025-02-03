import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';

//import { AuthTokenGuard } from '../guards/auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { HasModule } from './has/has.module';
import { routes } from './app.routes';

@Module({
  imports: [CoreModule, HasModule,
    RouterModule.register(routes)
  ],
  controllers: [AppController],
  providers: [AppService, /*{ provide: APP_GUARD, useClass: AuthTokenGuard }*/],
  exports: [],
})
export class AppModule { }
