export interface IUser {
  traineeEmail: string;
  reviewerEmail: string;
}
export interface IPermission {
[user: string]: {
  all: string[],
  read: string[],
  update: string[],
  write: string[],
  delete: string[],
};
}
