import IConfig from './IConfig';
import { config  } from 'dotenv';
config();
//console.log("config",config());
const portNumber : IConfig = Object.freeze ( {
  port : process.env.PORT,
  mongoURL : process.env.MONGO_URL
}
);
//console.log(portNumber.port);
export default portNumber;
