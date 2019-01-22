import * as express from "express";

class Server {
  private app: express.Express;
  constructor(private portNumber) {
    this.app = express ();
  }
  public bootstrap() {
    this.setupRoutes();
    return this;
  }
  public setupRoutes() : void {
    const { app } = this;
    app.use('/abc',(req,res) => {
      res.send("I am Ok");
    })

  }
  public run() {
    const { app , portNumber :{ port} } = this;
    app.listen(port, err => {
      if(err)
        throw err


    console.log("app listening to port" , port );
    });

}
}
export default Server;
