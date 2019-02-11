import { Router } from 'express';

// import routers
import traineeRouter from './controllers/trainee/router';
import userRouter from './controllers/user/router';

const mainRouter: Router = Router();
mainRouter.use('/trainee', traineeRouter );
mainRouter.use('/user', userRouter );

export default mainRouter;
