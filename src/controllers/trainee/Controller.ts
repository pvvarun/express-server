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
  read1(req,res) {
    const data = null;
    res.status(200).send(successHandler("Trainee details are:", data));
  }

  read2(req,res) {
    const { name, id, status } = req.body;
    if(!name) {
        return res.status(400).send("Name is mandatory");
    }
    else {
      if(!id) {
        return res.status(400).send("id is missing");
      }
    }
    const data = [
      {
        name: name,
        id:id,
        maritalStatus:status

      }
    ]
    res.status(200).send(successHandler("New Trainee : ",data));
  }

  read3(req,res) {
    const { name, id, status } = req.body;
    const data = [
      {
        name: name,
        id: id,
        maritalStatus: status

      }
    ]
    res.status(200).send(successHandler("Trainee Details Updated",data));
  }
  read4(req,res)
  {
    const id = req.params.id;
    console.log(id);
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
