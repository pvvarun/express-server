import userRepository from './../repositories/user/UserRepository';
import IUserModel from './../repositories/user/IUserModel'
export default function seedData() {
  const seedData = new userRepository();
  seedData.count().then((data) => {
    if (!data)  {
      const trainee1 = <IUserModel> {
        id : "1234",
        name : "VARUN",
        email : "varun.mishra@successive.tech",
        role : "trainee"
      }
      seedData.create(trainee1);
      const trainee2 = <IUserModel> {
        id : "12345",
        name : "YOGESH",
        email : "yogesh.singh@successive.tech",
        role : "head-trainee"
      }
      seedData.create(trainee2);
    }
  });
}
