import * as express from "express";
import * as bodyParser from "body-parser";
import { errorHandler , notFoundRoutes } from './index';
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
    })
    app.use(notFoundRoutes);
    app.use(errorHandler);
  }

  public run() {
    const { app , portNumber :{ port} } = this;
    app.listen(port, err => {
      if(err) {
        throw err;
      }
      console.log("app listening to port" , port );
    });
  }
}
export default Server;
