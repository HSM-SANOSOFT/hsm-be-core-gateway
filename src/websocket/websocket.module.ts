import { Module } from '@nestjs/common';

import { GatewayWebsocket } from './websocket';

@Module({
  providers: [GatewayWebsocket],
})
export class WebsocketModule {}
