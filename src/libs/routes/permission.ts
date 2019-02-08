import { permissions } from '../constant';
export default function hasPermissions(moduleName, role, permissionType): boolean {
  console.log('permissionType--', permissionType);
  const allowedPremissions = permissions[moduleName] && permissions[moduleName][permissionType];
  console.log('allowed permission is-------', allowedPremissions);
  const all = permissions[moduleName] && permissions[moduleName].all;
  console.log('all is ---------------', all);
  const check = (
    (allowedPremissions && allowedPremissions.includes(role)) ||
    (all && all.includes(role))
  );

  return check;
}
// console.log(hasPermissions('getUsers3', 'head-trainer', 'delete'));
