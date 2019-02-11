import * as mongoose from 'mongoose';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static generateObject() {
    return String(mongoose.Types.ObjectId());
  }
  public model: M;

  constructor(userModel) {
    this.model = userModel;
  }
  public createDOC(data): Promise<D> {
    data._id = VersionableRepository.generateObject();
    const user = this.model.create(data, (err) => {
      if (err) {
        throw (err);
      }
      else {
        console.log('reation successfully');
      }
    });
    return user;
  }

  public read(readData): any {
    return this.model.findOne(readData, (err) => {
      if (err) {
        throw (err);
      }
    });
  }
  // public count(): mongoose.Promise<D> {
  //   return this.model.countDocuments();
  // },
};
