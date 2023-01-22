import { WebSocketServer } from 'ws';
import 'dotenv/config';

const port = process.env.PORT;

export const wsServer = new WebSocketServer({port: Number(port)});

export const onConnect = (wsClient: any) => {
  console.log('Новый пользователь');
  // отправка приветственного сообщения клиенту
  wsClient.send('Привет');
  wsClient.on('message', (message: any) => {
    const jsonMessage = JSON.parse(message);
    console.log(jsonMessage);
    /* обработчик сообщений от клиента */
  });
  wsClient.on('close', () => {
    // отправка уведомления в консоль
    console.log('Пользователь отключился');
  });
};
