import  { Request, Response, NextFunction } from 'express'
import permission from './permission'
import * as jwt from 'jsonwebtoken'
import  portNumber  from './../../config/configuration'
import UserRepository from '../../repositories/user/UserRepository';
const { key } = portNumber;
export default function authMiddleWare( module:string , permissionType:string ) {
  return function workAuthMiddleWare(req : Request, res : Response, next : NextFunction ) {
  const token = req.headers.token;
  const decoded = jwt.verify(token, key);
  console.log(decoded);
  const { _id } = decoded;
  const id = String(_id);
  console.log( id );
  const errMessage = (`Unauthorized access`);
  const userRepo = new UserRepository();
  // if(!role) {
  //       throw({ error : errMessage, statusCode:403});
  // }
  // console.log(decoded);

  //const result = permission(module,role,permissionType);

  // if(!result) {
  //   throw ({ error : errMessage, statusCode:403});
  // }
  // else {
  //   next();
  // }


  }
}
