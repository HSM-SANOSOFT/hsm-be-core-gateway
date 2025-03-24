import { Module } from '@nestjs/common';

//import { APP_GUARD } from '@nestjs/core';
//import { AuthTokenGuard } from '../guards/auth.guard';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './microservices/core/core.module';
import { HasModule } from './microservices/has/has.module';

@Module({
  imports: [CoreModule, HasModule],
  controllers: [AppController],
  providers: [AppService /*{ provide: APP_GUARD, useClass: AuthTokenGuard }*/],
  exports: [],
})
export class AppModule {}
