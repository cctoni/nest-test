import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway(4001)
export class AppGateway {
  @WebSocketServer()
  ws;
}
