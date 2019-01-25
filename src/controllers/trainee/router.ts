import { Router , Request , Response , NextFunction} from 'express'
import controller from './Controller';
import validateHandler from './../../libs/routes/validateHandler'
import validaterObject  from './validate'
const traineeRouter : Router = Router();
traineeRouter.get('/', controller.read1);
traineeRouter.post('/', validateHandler(validaterObject.create), controller.read2);
traineeRouter.put('/', controller.read3);
traineeRouter.delete('/:id', controller.read4);

export default traineeRouter;
