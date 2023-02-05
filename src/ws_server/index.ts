import { WebSocketServer } from 'ws';
import takeAction from './operation';
import prnt from './operations/prnt';
import 'dotenv/config';

const port = process.env.PORT;

export const wsServer = new WebSocketServer({port: Number(port)});

export const onConnect = (wsClient: any) => {
  wsClient.on('message', async function message(data: Buffer) {
    try {
      if (data.toString('utf8') == 'prnt_scrn') {
        const pr = await (async () => await prnt())();
        wsClient.send(`prnt_scrn ${pr}`);
      } else {
        takeAction(data);
        wsClient.send(data.toString('utf8') === 'mouse_position' ? `${data.toString()} 0` : data.toString());
      }
    } catch {
      console.log('что-то пошло не так...');
    }
  });
  wsClient.on('close', () => {
    console.log('Пользователь отключился');
  });
};
