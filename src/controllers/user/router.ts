import { Router, Request, Response, NextFunction } from 'express'
import controller from './Controller';
import validateHandler from './../../libs/routes/validateHandler'
import validaterObject from './validate'
import authMiddleWare from '../../libs/routes/authMiddleWare'
const userRouter: Router = Router();
userRouter.get('/?', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.get), controller.read);
userRouter.post('/', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.create), controller.create);
userRouter.put('/', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.update), controller.update);
userRouter.delete('/:id', authMiddleWare("getUsers1", "read"), validateHandler(validaterObject.delete), controller.delete);

export default userRouter;
