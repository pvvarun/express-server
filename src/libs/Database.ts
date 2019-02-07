import { disconnect } from 'cluster';
import * as mongoose from 'mongoose';
import seedData from './seedData';
export default class Database {
  public static open(mongoURL: string ) {
    const options = {
      autoIndex: false, // Don't build indexes
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      family: 4, // Use IPv4, skip trying IPv6
      poolSize: 10, // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    };
    const promise = new Promise((resolve, reject) => {
      mongoose.connect(mongoURL, options, (err) => {
        if (err) {
          reject(err);
        }
        resolve();
        console.log('successfully connected by mongoose');
        seedData();
      });

    });
    return promise;
  }
  public disconnect() {
    mongoose.disconnect();
    console.log('successfully disconnected');
  }
}
