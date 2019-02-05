import userModel from './UserModel';
import * as mongoose from 'mongoose';

export default class UserRepository {
  public static generateObject() {
    return String(mongoose.Types.ObjectId());
  }
  create(data) {
    data._id = UserRepository.generateObject();
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
    return userModel.findOne(readData);
  }
  count() {
    return userModel.countDocuments();
  }
}
