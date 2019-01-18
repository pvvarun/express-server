const headTrainer = 'head-trainer';
const trainer = 'trainer';
const trainee = 'trainee';

let permissions = {
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
function hasPermissions( moduleName, role, permissionType ) {
  if(permissions[moduleName]) {
    if(permissions[moduleName][permissionType].includes(role) || permissions[moduleName]['all'].includes(role)) {
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}
console.log(hasPermissions('getUsers3', 'head-trainer', 'delete'));
