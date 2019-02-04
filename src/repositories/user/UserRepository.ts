import userModel from './UserModel';
import * as mongoose from 'mongoose';

export default class UserRepository {
  create(data) {
      const user = userModel.create(data,(err) => {
      if (err) {
        throw (err);
      }
      else {
        console.log("creation successfully");
      }
    });
    return user;
  }
  read( readData ) {

    const user = userModel.find( (err) => {
      if (err) {
        throw (err);
      }
      else {
        console.log("read  successfully");
      }
    })
    return user;
  }
  count() {
    return userModel.countDocuments();
  }
}
