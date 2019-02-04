import * as mongoose from 'mongoose';
// export default class UserSchema extends mongoose.Schema {
//   constructor (options : any) {
//   const baseSchema : any = {
//     name : String,
//     id : String,
//     email : String,
//     role: String
//   };

// super(baseSchema , options );
// }

//}
const userSchema  = new mongoose.Schema(
  {
    name : String,
    id : String,
    email: String,
    role: String
  }
);
export default userSchema;
