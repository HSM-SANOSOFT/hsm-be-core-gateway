import { Logger } from '@nestjs/common';
import {
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class AuthWebsocket implements OnGatewayConnection, OnGatewayDisconnect {
  logger = new Logger('GATEWAY AUTH WEBSOCKET');
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    this.logger.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  logout(user_id: string, @ConnectedSocket() client: Socket) {
    client.emit('logout', { status: true });
    this.logger.log(`loging out user: ${user_id} on client: ${client}`);
  }
}
