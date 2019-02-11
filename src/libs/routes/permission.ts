import { permissions } from '../constant';
export default function hasPermissions(moduleName, role, permissionType): boolean {
  console.log('permissionType--', permissionType);
  const allowedPremissions = permissions[moduleName] && permissions[moduleName][permissionType];
  const all = permissions[moduleName] && permissions[moduleName].all;
  const check = (
    (allowedPremissions && allowedPremissions.includes(role)) ||
    (all && all.includes(role))
  );

  return check;
}
// console.log(hasPermissions('getUsers3', 'head-trainer', 'delete'));
