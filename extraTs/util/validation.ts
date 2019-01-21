import {validateEmail} from "./helper"
import { IUser } from "../interfaces"
let name = "varun.mishraj@successive.tech";
//console.log(name)
//validateEmail(name);
let valid = 0, invalid = 0;
const valUser =[];
const invalUser =[];
export default function validateUsers( user : IUser[] ) : void {
    user.forEach( function ( user : IUser ) {
        const { traineeEmail, reviewerEmail} = user  //destruct array object
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail) ) {
            valid += 1;
            valUser.push(user);
        }
        else {
            invalid += 1;
            invalUser.push(user);
        }
    });
console.log(`valid emails are ${valid}`);
console.log(valUser);
console.log(`invalid emails are ${invalid}`);
console.log(invalUser);
}
//validateUsers(users);
