import { request, response, NextFunction } from 'express'
import { User } from '../entities/User.entity'

import { AuthService } from '../services/auth.services'

const service = new AuthService();


export const signup = (req, res, next) => {
  
    try {
      
      const email = req.body.email;
      const password = req.body.password;

      if(password && email){
        const validationData = service.comparePassword(email,password);
          if(validationData){
            res.json(service.signToken(email));
            res.status(200).json("User has been authorized")
          }
    
      }else{  
        return res.status(400).json("User not has been authorized");     
      }

    } catch (error) {
      next(error);
    }
}

export const signIn = (req, res, next) => {
  res.send('This is SignIn')
}
