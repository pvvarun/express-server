import { Router , Request , Response , NextFunction } from 'express'
import traineeRouter from './controllers/trainee/router'
import userRouter from './controllers/user/router'
const mainRouter: Router = Router();
export default mainRouter.use('/trainee', traineeRouter );
mainRouter.use('/user', userRouter );


