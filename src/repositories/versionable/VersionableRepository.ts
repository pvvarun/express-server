import * as mongoose from 'mongoose';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
  public static generateObject() {
    return String(mongoose.Types.ObjectId());
  }
  public model: M;

  constructor(userModel) {
    this.model = userModel;
  }
  public async createDOC(originalData) {
    const data = Object.assign({}, originalData);
    data._id = VersionableRepository.generateObject();
    data.original_Id = data._id;
    data.createdAt = Date.now();
    console.log('data---->', data);

    const user = await this.model.create(data);
    return user;
  }

  public read(readData): any {
    return this.model.findOne(readData, (err) => {
      if (err) {
        throw (err);
      }
    });
  }

  public async updateDocument(originalData, dataToBeAdded) {
    const obj = { ...originalData, ...dataToBeAdded};
    console.log ('original data is---------', obj);
    const newObj = await this.createDOC({...obj});
    console.log(' updateDocument is-----------', newObj );
    const updateDocument = await this.model.updateOne
    ({original_Id: originalData.original_Id , deletedAt: {$exists: false}}, {deletedAt: true });
    const newnewObj = await this.model.updateOne
    ({_id: newObj._id , deletedAt: {$exists: false}}, {original_Id: originalData.original_Id  });
    console.log(' updateDocument after further updates is-----------', updateDocument );
    return newnewObj;
  }

  public async deleteDoc(id) {
    const deleteResult = await this.model.updateOne
    ({ _id: id,  deletedAt: {$exists: false}}, {deletedAt: true });
    console.log(' deletedoc is-------', deleteResult);
    if (!deleteResult) {
      throw ({ error: 'user does not exist ', status: 403});
    }
  }
}
