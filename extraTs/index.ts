import { IUser } from './interfaces';

import { diamond, triangle } from "./patterns/index";
// import {triangle} from "./patterns/index";
import { hasPermissions, validateUsers } from "./util/index";
// import {validateUsers} from "./util/index";

diamond(8);
triangle(8);
const users : IUser[] = [
  {
      traineeEmail: 'trainee1@successive.tech',
      reviewerEmail: 'reviewer1@successive.tech',
  },
  {
      traineeEmail: 'trainee2@succedfssive.tech',
      reviewerEmail: 'reviewer$ff2@successive.tech',
  },
  {
      traineeEmail: 'trainee3@successive.tech',
      reviewerEmail: 'reviewer3@successive.tech',
  },
  {
      traineeEmail: 'trainee4@successive.tec',
      reviewerEmail: 'reviewer4@123successive.tech',
  },
  {
      traineeEmail: 'trainee5@successive.tech',
      reviewerEmail: 'reviewer5@successive.tech',
  }
  ]
validateUsers(users);
console.log(hasPermissions('getUsers3', 'head-trainer', 'delete'));
