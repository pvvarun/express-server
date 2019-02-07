import * as bcrypt from 'bcrypt';
import userRepository from "./../repositories/user/UserRepository";
import IUserModel from "./../repositories/user/IUserModel";
export default async function seedData() {
  const seedData = new userRepository();
  const Password = await bcrypt.hash('12345678', 10);
  seedData.count().then(data => {
    if (!data) {
      const trainee1 = <IUserModel>{
        id: "1234",
        name: "VARUN",
        email: "varun.mishra@successive.tech",
        role: "trainee",
        hashedPassword: Password,
      };
      seedData.create(trainee1);
      const trainee2 = <IUserModel>{
        id: "12345",
        name: "YOGESH",
        hashedPassword: Password,
        email: "yogesh.singh@successive.tech",
        role: "head-trainer"
      };
      seedData.create(trainee2);
    }
  });
}
