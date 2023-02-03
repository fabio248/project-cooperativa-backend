import { Router, Application } from 'express';
import { routerlogin } from './login.routes';
import { userRouter } from './user.routes';

export function routerAPI(app: Application) {
  const router: Router = Router();
  app.use('/api/v1', router);
  router.use('/users', userRouter);
  router.use('/login', routerlogin);
}
