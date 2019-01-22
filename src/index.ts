import Server from './Server'
import portNumber from './config/configuration';
const server = new Server(portNumber);
server.bootstrap().run();
