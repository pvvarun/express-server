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
    const createData = new UserRepository();
    const { name, id, role, email } = req.body;
    createData.create({ name, role, email });
    const data = [
      {
        id,
        // maritalStatus: 'Married',
        name,
      },
    ];
    // console.log('data--', data);
    res.status(200).send(successHandler('New User created successfully : ', data));
  }

  public async update(req, res, next) {
    const { id } = req.body;
    const findData = new UserRepository();
    findData.read({ _id: id, deletedAt: {$exists: false} }).lean()
    .then(async (data) => {
      console.log('id--', id);
      console.log('data--', data);
      if (!data) {
        return next({ error: 'no record found to be updated', status: 402 });
      }
      const finalData = await findData.updateDocument( data, req.body.dataToUpdate);
      res.status(200).send(successHandler('User Details Updated', finalData));
    });
  }
  public async delete(req, res) {
    const id = req.params.id;
    console.log(id);
    const findData = new UserRepository();
    const deletedData = await findData.deleteDoc(id);
    res.status(200).send(successHandler('User is deleted', deletedData));
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
