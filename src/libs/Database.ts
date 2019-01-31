import * as mongoose from 'mongoose'
import { disconnect } from 'cluster';
export default class Database {
  static open(mongoURL : string ) {
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      autoIndex: false, // Don't build indexes
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      poolSize: 10, // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4 // Use IPv4, skip trying IPv6
    };
    const promise = new Promise((resolve, reject) => {
      mongoose.connect(mongoURL, options, (err) => {
        if(err) {
          reject(err);
        }
        resolve();
        console.log("successfully connected by mongoose");
      })

    });
    return promise;
  }
  disconnect() {
    mongoose.disconnect();
    console.log("successfully disconnected");
  }
}
