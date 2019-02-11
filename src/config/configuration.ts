import { config } from 'dotenv';
import IConfig from './IConfig';
config();
// console.log("config",config());
const portNumber: IConfig = Object.freeze({
  key: process.env.key,
  mongoURL: process.env.MONGO_URL,
  port: process.env.PORT,
},
);
// console.log(portNumber.port);
export default portNumber;
