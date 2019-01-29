import { Router , Request , Response , NextFunction} from 'express'
import controller from './Controller';
import validateHandler from './../../libs/routes/validateHandler'
import validaterObject  from './validate'
const traineeRouter : Router = Router();
traineeRouter.get('/?', validateHandler(validaterObject.get), controller.read);
traineeRouter.post('/', validateHandler(validaterObject.create), controller.create);
traineeRouter.put('/', validateHandler(validaterObject.update), controller.update);
traineeRouter.delete('/:id',validateHandler(validaterObject.delete), controller.delete);

export default traineeRouter;
