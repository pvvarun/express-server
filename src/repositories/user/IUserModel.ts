import * as mongoose from 'mongoose';
import IVersionableModel from '../versionable/IVersionableModel';
interface IUserModel extends IVersionableModel {
  '_id': string;
  'email': string;
  'name': string;
  'hashedPassword': string;
  'role': string;
}
export default IUserModel;
