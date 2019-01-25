import { Router , Request , Response , NextFunction} from 'express'
import controller from './Controller';
const traineeRouter : Router = Router();
traineeRouter.get('/', controller.read1);
traineeRouter.post('/', controller.read2);
traineeRouter.put('/', controller.read3);
traineeRouter.delete('/:id', controller.read4);

export default traineeRouter;
