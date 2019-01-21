const headTrainer = 'head-trainer';
const trainer = 'trainer';
const trainee = 'trainee';
export const permissions = {
  'getUsers1': {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: [],
  }, 'getUsers2': {
    all: [trainer],
    read: [trainee],
    write: [trainer],
    delete: [],
  }, 'getUsers3': {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainee],
    delete: [],
  }
}
