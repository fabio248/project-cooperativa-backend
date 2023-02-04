import { Router } from 'express';
import * as passport from 'passport';
import {
    login,
    recovery
} from '../controller/login.controller';

export const routerlogin = Router();

routerlogin.post(
    '/login',
     passport.authenticate('local', { session: false }),
    login
);
routerlogin.post('/recovery', recovery)


export default routerlogin