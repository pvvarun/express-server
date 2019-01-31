import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler , notFoundRoutes } from './index';
import mainRouter from './router'
import Database from './libs/Database'
class Server {
  private app: express.Express;
  constructor(private portNumber) {
    this.app = express ();
  }

  public initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json());
  }

  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    this.run();
  }

  public setupRoutes() : void {
    const { app } = this;
    app.use('/abc',(req,res) => {
      res.send("I am Ok");
    });
    app.use('/api',mainRouter);
    app.use(notFoundRoutes);
    app.use(errorHandler);
  }

  public run() {
    const { app , portNumber :{ port , mongoURL } } = this;
          console.log(mongoURL);
      const connectMongo = Database.open(mongoURL);
      connectMongo.then(() => {
        app.listen(port, err => {
          if(err) {
            throw err;
          }
          console.log("app listening to port" , port );
        });
      })
      .catch((err) => {
        console.log(err);
      })

    }
}
export default Server;
