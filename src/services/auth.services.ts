import * as boom from "@hapi/boom";
import * as bcrypt from "bcrypt";
import { User } from "../entities/User.entity";
import { AppDataSource } from "../db/data-source";
import { UserService } from "./user.services";
import * as jwt from "jsonwebtoken";
import config from '../config/config';


const service = new UserService();

export class AuthService {
   private userRepository = AppDataSource.getRepository(User);

   async comparePassword(email, password): Promise<User>{
      const user = await service.findOneEmail(email)
      try{
        
         if (!user) throw boom.unauthorized();
         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) throw boom.unauthorized();
         console.log(isMatch)
         console.log(user)
      }catch (error){
        throw boom.unauthorized("This User Don't Unauthorized");
      }
       return user
   }

   signToken(email){
      const datos={
         sub: email.id,
      };
      const token = jwt.sign(datos, config.secretJwt);
      return { token }
   }


   
}