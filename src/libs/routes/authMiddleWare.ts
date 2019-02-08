import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import portNumber from './../../config/configuration';
import permission from './permission';
import hasPermissions from './permission';
const { key } = portNumber;
export default function authMiddleWare(module: string, permissionType: string) {
  return function workAuthMiddleWare(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.token;
    let decoded;
    decoded = jwt.verify(token, key);
    console.log('decoded is ---', decoded);
    const errMessage = (`Unauthorized access`);
    const userRepo = new UserRepository();
    if (!decoded) {
      throw ({ error: errMessage, statusCode: 403 });
    }
    const { id } = decoded;
    const findData = new UserRepository();
    findData.read({ _id: id })
    .then((data) => {
      console.log('id--', id);
      console.log('data--', data);
      if (!data) {
        return next({ error: 'no record found', status: 402 });
      }
      const { role } = data;
      console.log('role is-------------', role);
      const check = hasPermissions(module, role, permissionType);
      console.log('check is--------------', check);
      if (!check) {
        return next({ error: 'dont permision' , status: 403 } );
      }
      req.body.newData = data;
      next();
    })
    .catch((err) => {
      console.log('error in find query ----', err);
      return next(err);
    });
  };
}
