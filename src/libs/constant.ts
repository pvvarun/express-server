import { IPermission } from './interface';
const headTrainer: string = 'head-trainer';
const trainer = 'trainer';
const trainee = 'trainee';
export const permissions: IPermission = {
  getUsers: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    update: [headTrainer, trainee],
    write: [trainer],
  },
};
