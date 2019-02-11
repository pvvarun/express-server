import * as mongoose from 'mongoose';
interface IVersionableModel extends mongoose.Document {
  original_Id: string;
  createdBy: string;
  createdAt: string;
  deletedAt: string;
}
export default IVersionableModel;
