import { NextFunction, Request, Response, Router } from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import validateHandler from './../../libs/routes/validateHandler';
import controller from './Controller';
import validaterObject from './validate';
const userRouter: Router = Router();
userRouter.get(
  '/?',
  authMiddleWare('getUsers', 'read'),
  validateHandler(validaterObject.get),
  controller.read,
);
userRouter.post(
  '/',
  authMiddleWare('getUsers', 'create'),
  validateHandler(validaterObject.create),
  controller.create,
);
userRouter.put(
  '/',
  authMiddleWare('getUsers', 'update'),
  validateHandler(validaterObject.update),
  controller.update,
);
userRouter.delete(
  '/:id',
  authMiddleWare('getUsers', 'delete'),
  validateHandler(validaterObject.delete),
  controller.delete,
);
userRouter.post(
  '/login',
  controller.login,
);
export default userRouter;
