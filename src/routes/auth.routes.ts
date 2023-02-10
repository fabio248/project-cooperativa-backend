import { Router } from "express";
import * as passport from "passport";
import { 
    signIn, signup 
} from "../controller/auth.controller"; // se esta instanciando las rutas de las nuevas acciones de Authenticate

export const routerAuth = Router();

routerAuth.post('/login', signup)
routerAuth.post('/signin', signIn)
