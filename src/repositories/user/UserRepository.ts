import * as mongoose from 'mongoose';
import IUserModel from '../user/IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import { userModel } from './UserModel';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
  constructor() {
    super( userModel);
  }
  public create(data) {
    return this.createDOC(data);
  }
  public read(readData): any {
    console.log(' inside the find data---------');
    const data = this.model.findOne(readData);
    // console.log(data);
    return data;
  }
  public count(): any {
    return this.model.countDocuments();
  }
}
