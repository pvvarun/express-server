import { Router , Request , Response , NextFunction} from 'express'
import successHandler from '../../libs/routes/successHandler'
class TraineeController {
  private static instance : TraineeController
  public static createInstance() {
    if(!TraineeController.instance) {
      return TraineeController.instance= new TraineeController;
    }
    else {
      return TraineeController.instance;
    }
  }
  read(req,res) {
    const data = null;
    res.status(200).send(successHandler("Trainee details are:", data));
  }

  create(req,res) {
    const { name, id, } = req.body;
    const data = [
      {
        name: name,
        id:id,
        maritalStatus:status

      }
    ]
    res.status(200).send(successHandler("New Trainee : ",data));
  }

  update(req,res) {
    const { id } = req.body;
    const { name , status} = req.body.dataToUpdate;
    const data = [
      {
        name: name,
        id: id,
        maritalStatus: status

      }
    ]
    res.status(200).send(successHandler("Trainee Details Updated",data));
  }
  delete(req,res)
  {
    const id = req.params.id;
    const data = [
      {
        name: "",
        id: id,
        maritalStatus: null

      }
    ]
    res.status(200).send(successHandler("Trainee id deleted",data));
  }
}
export default TraineeController.createInstance();
