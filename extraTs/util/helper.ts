
export function validateEmail( email: string ) : boolean {
  let reg = RegExp ("^([a-zA-Z0-9._%+-])+@successive.tech$");
  return reg.test(email);
}
