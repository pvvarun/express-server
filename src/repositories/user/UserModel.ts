import * as mongoose from 'mongoose';
import UserSchema from './UserSchema';
const { baseSchema } =  this ;
const userModel = mongoose.model('userModel', UserSchema);
export default userModel;
