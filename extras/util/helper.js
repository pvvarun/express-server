import {} from "./validation";
export function validateEmail(email = "123"){
  let reg = RegExp ("^([a-zA-Z0-9._%+-])+@successive.tech$");
  return reg.test(email);
}
