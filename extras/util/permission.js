import {permissions} from "./index";
export default function hasPermissions( moduleName, role, permissionType ) {
  const check = permissions[moduleName] && (
    permissions[moduleName][permissionType].includes(role) ||
    permissions[moduleName]['all'].includes(role)
  );
  // if(permissions[moduleName]) {
  //   if(permissions[moduleName][permissionType].includes(role) || permissions[moduleName]['all'].includes(role)) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
  // else {
  //   return false;
  // }
  return check;
}
//console.log(hasPermissions('getUsers3', 'head-trainer', 'delete'));
