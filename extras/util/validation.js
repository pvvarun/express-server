const users = [
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
function validateEmail(email){
    let reg = RegExp ("^([a-zA-Z0-9._%+-])+@successive.tech$");
    if(reg.test(email))
        return true;
    else
        return false;
}
let name = "varun.mishraj@successive.tech";
//console.log(name)
//validateEmail(name);
let valid = 0, invalid = 0;
const valUser =[];
const invalUser =[];
function validateUsers(us) {
    us.forEach( function(ua) {
        const { traineeEmail, reviewerEmail} = ua  //destruct array object
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail) ) {
            valid += 1;
            valUser.push(ua);
        }
        else {
            invalid += 1;
            invalUser.push(ua);
        }
    });
console.log(`valid emails are ${valid}`);
console.log(valUser);
console.log(`invalid emails are ${invalid}`);
console.log(invalUser);
}
validateUsers(users);
