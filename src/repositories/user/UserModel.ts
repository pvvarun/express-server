import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import UserSchema from './UserSchema';

export const userSchema = new UserSchema( {
  collection: 'userAgain',
});
export const userModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
  'userAgain',
  userSchema,
  'userAgain',
  true,
);
