import { Router } from "express";
import * as passport from "passport";
import { login, recovery } from "../controller/login.controller";

export const routerAuth = Router();

routerAuth.post(
  "/login",
  passport.authenticate("local", { session: false }),
  login
);
routerAuth.post("/recovery", recovery);
