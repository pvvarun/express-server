import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema';
export default class UserSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema: any = {
      _id: String,
      email: String,
      hashedPassword: String,
      name: String,
      role: String,
    };
    super(baseSchema, options);
  }
}

// const userSchema  = new mongoose.Schema(
//   {
//     _id: String,
//     name : String,
//     id : String,
//     email: String,
//     role: String
//   }
// );
// export default userSchema;
