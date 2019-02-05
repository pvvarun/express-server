import { Router, Request, Response, NextFunction } from "express";
import successHandler from "../../libs/routes/successHandler";
class UserController {
  private static instance: UserController;
  public static createInstance() {
    if (!UserController.instance) {
      return (UserController.instance = new UserController());
    } else {
      return UserController.instance;
    }
  }
  read(req, res) {
    const showData = req.body.newData;
    res.send(showData);
  }

  create(req, res) {
    const { name, id } = req.body;
    const data = [
      {
        name: name,
        id: id,
        maritalStatus: status
      }
    ];
    res.status(200).send(successHandler("New User : ", data));
  }

  update(req, res) {
    const { id } = req.body;
    const { name, status } = req.body.dataToUpdate;
    const data = [
      {
        name: name,
        id: id,
        maritalStatus: status
      }
    ];
    res.status(200).send(successHandler("User Details Updated", data));
  }
  delete(req, res) {
    const id = req.params.id;
    const data = [
      {
        name: "",
        id: id,
        maritalStatus: null
      }
    ];
    res.status(200).send(successHandler("User id deleted", data));
  }
}
export default UserController.createInstance();
