import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { ComsModule } from './coms/coms.module';
import { DocumentosModule } from './docs/docs.module';
import { UsersModule } from './users/users.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ComsModule,
    CommonModule,
    DocumentosModule,
    WebhookModule,
  ],
})
export class CoreModule {}
