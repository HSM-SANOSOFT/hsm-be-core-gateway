import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ApiModule } from 'src/api/api.module';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ProvidersModule } from 'src/providers/providers.module';
import { WebhookModule } from 'src/webhook/webhook.module';

@Module({
  imports: [
    ApiModule,
    WebhookModule,
    ProvidersModule,
    RouterModule.register([{ path: 'webhook', module: WebhookModule }]),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
