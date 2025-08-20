import { Module } from '@nestjs/common';

import { ChatwootController } from './controller/chatwoot.controller';

@Module({
  controllers: [ChatwootController],
})
export class IntModule {}
