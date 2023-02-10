import { error } from 'console';
import { request, response, NextFunction } from 'express'
import { userInfo } from 'os'
import { serialize } from 'v8';
import { User } from '../entities/User.entity'
import { validatorHandler } from '../middlewares/validator.handler';
import { AuthService } from '../services/auth.services'

const service = new AuthService();

export const signup = (req, res, next) => {
    try {
      const password = req.body.password
      const email = req.body.email;
      if(password && email){
       const validationData = service.comparePassword(email,password);
        if(!validationData){
          res.json(service.signToken(email));
        }
      }else{
        return res.json(validatorHandler);     
      }

    } catch (error) {
      next(error);
    }
}

export const signIn = (req, res, next) => {
  res.send('This is SignIn')
}
