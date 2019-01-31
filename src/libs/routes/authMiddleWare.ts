import  { Request, Response, NextFunction } from 'express'
import permission from './permission'
import * as jwt from 'jsonwebtoken'
import  portNumber  from './../../config/configuration'
const { key } = portNumber;
export default function authMiddleWare( module:string , permissionType:string ) {
  return function workAuthMiddleWare(req : Request, res : Response, next : NextFunction ) {
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdWNjZXNzaXZlIFRlY2hub2xvZ2llcyIsImlhdCI6MTU0ODY5MDQzNywiZXhwIjoxNTgwMjI2NDM3LCJhdWQiOiJ3d3cuc3VjY2Vzc2l2ZS5pbiIsInN1YiI6IkxlYXJuIGFuZCBJbXBsZW1lbnQiLCJuYW1lIjoiVHJhaW5lZSIsImVtYWlsIjoidHJhaW5lZUBzdWNjZXNzaXZlLnRlY2giLCJyb2xlIjoidHJhaW5lZSJ9.kCa388UevNwb9toIJZtms54F5avHKxyrcagWkTU70sc';
  const decoded = jwt.verify(token, key);
  const { role } = decoded;
  const errMessage = (`Unauthorized access`);
  if(!role) {
        throw({ error : errMessage, statusCode:403});
  }
  console.log(decoded);

  const result = permission(module,role,permissionType);

  if(!result) {
    throw ({ error : errMessage, statusCode:403});
  }
  else {
    next();
  }


  }
}
