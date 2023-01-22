import { WebSocketServer } from 'ws';
import takeAction from './operation'
import 'dotenv/config';

const port = process.env.PORT;

export const wsServer = new WebSocketServer({port: Number(port)});

export const onConnect = (wsClient: any) => {
  console.log('Новый пользователь');
  // отправка приветственного сообщения клиенту
  // wsClient.send('Привет');
  wsClient.on('message', function message(data: any) {
    try {
      takeAction(data);
    } catch {
      console.log('что-то пошло не так...');
    }
  });
  wsClient.on('close', () => {
    // отправка уведомления в консоль
    console.log('Пользователь отключился');
  });
};
