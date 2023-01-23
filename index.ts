import { httpServer } from "./src/http_server/index";
// import { mouse } from "@nut-tree/nut-js";
import { wsServer, onConnect } from './src/ws_server/index'
import 'dotenv/config';

const port = process.env.PORT;

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

console.log(`Start WebSocet server on the ${port} port!`)
wsServer.on('connection', onConnect);
