import { Router , Request , Response , NextFunction} from 'express'
import successHandler from '../../libs/routes/successHandler'
export default class TraineeController {
  read1(req,res) {
    res.send("inside read1");
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
      if(!status) {
        return res.status(400).send("status is missing");
      }
    }
    const data = [
      {
        name: name,
        id:id,
        maritalStatus:status

      }
    ]
    res.status(200).send(successHandler("New Trainee Created",data));
  }

  read3(req,res) {
    const data = [
      {
        name: "varun",
        id: 3654,
        maritalStatus: "Unmarried"

      }
    ]
    res.status(200).send(successHandler("Trainee Details Updated",data));
  }
}
