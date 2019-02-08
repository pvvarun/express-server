import { Router, Request, Response, NextFunction } from 'express'
import controller from './Controller';
import validateHandler from './../../libs/routes/validateHandler'
import validaterObject from './validate'
import authMiddleWare from '../../libs/routes/authMiddleWare'
const traineeRouter: Router = Router();
console.log('in router');
traineeRouter.get('/', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.get), controller.read);
traineeRouter.post('/', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.create), controller.create);
traineeRouter.put('/', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.update), controller.update);
traineeRouter.delete('/:id', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.delete), controller.delete);

export default traineeRouter;
