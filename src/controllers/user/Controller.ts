import * as bcrypt from 'bcrypt';
import { NextFunction, Request, Response, Router } from 'express';
import * as jwt from 'jsonwebtoken';
import portNumber from '../../config/configuration';
import successHandler from '../../libs/routes/successHandler';
import UserRepository from './../../repositories/user/UserRepository';

class UserController {
  public static createInstance() {
    if (!UserController.instance) {
      return (UserController.instance = new UserController());
    } else {
      return UserController.instance;
    }
  }
  private static instance: UserController;

  public read(req, res) {
    const showData = req.body.newData;
    res.send(showData);
  }

  public create(req: Request, res: Response) {
    const { name, id } = req.body;
    const data = [
      {
        id,
        maritalStatus: 'Married',
        name,
      },
    ];
    // console.log('data--', data);
    res.status(200).send(successHandler('New User : ', data));
  }

  public update(req, res) {
    const { id } = req.body;
    const { name, status } = req.body.dataToUpdate;
    const data = [
      {
        id,
        maritalStatus: status,
        name,
      },
    ];
    res.status(200).send(successHandler('User Details Updated', data));
  }
  public delete(req, res) {
    const id = req.params.id;
    const data = [
      {
        id,
        maritalStatus: undefined,
        name: '',
      },
    ];
    res.status(200).send(successHandler('User id deleted', data));
  }
  public async login(req, res) {
    const findData = new UserRepository();
    const { key } = portNumber;
    const {id, password} = req.body;
    const document = await findData.read({ _id: id });
    if (!document) {
      const errMessage = 'No document found in database';
      throw ({ error: errMessage, statusCode: 404 });
    }
    else {
    console.log('after finding document----', document);
    const result = await bcrypt.compare(password, document.hashedPassword);
    console.log(result);
    if (result) {
    const token = jwt.sign({ document }, key, { expiresIn: 15 * 60 });
    res.send(token);
    }
    else {
      const errMessage = 'Wrong Password!! Please enter id and password again';
      throw ({ error: errMessage, statusCode: 404 });
    }
  }
}
}
export default UserController.createInstance();
