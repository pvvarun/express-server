import { Router , Request , Response , NextFunction} from 'express'
import TraineeController from './Controller';
const controller = new TraineeController;
const traineeRouter : Router = Router();
traineeRouter.get('/' , controller.read1);
traineeRouter.post('/',controller.read2);

export default traineeRouter;
