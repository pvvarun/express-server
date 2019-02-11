import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(baseSchema: any, options: any) {
    const advanceSchema = {
      createdAt: {
        default: Date,
        required: true,
        type: String,
      },
      deletedAt: {
        required: false,
        type: String,
      },
      original_Id : {
        required: false,
        type: String,
      },
    };
    const completeSchema = { ...baseSchema , ...advanceSchema   };
    super(completeSchema, options);
  }
}
