import Server from './Server'
import portNumber from './config/configuration';
import { errorHandler , notFoundRoutes } from './libs/routes/index';
export { errorHandler , notFoundRoutes };
const server = new Server(portNumber);
server.bootstrap();
