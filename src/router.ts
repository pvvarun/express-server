import { Router , Request , Response , NextFunction } from 'express'
import traineeRouter from './controllers/trainee/router'
const mainRouter: Router = Router();
export default mainRouter.use('/trainee', traineeRouter )


