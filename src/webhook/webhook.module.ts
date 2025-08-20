import { Module } from '@nestjs/common';

import { IntModule } from './ms/int/int.module';

@Module({
  imports: [IntModule],
})
export class WebhookModule {}
