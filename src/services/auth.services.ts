import * as boom from "@hapi/boom"; //para el manejo de errores se usa el boom
import * as bcrypt from "bcrypt"; //para proceder a incryptar la contraseña
import config from "../config/config";
import jwt from "jsonwebtoken"; //para poder generar el token de los usuarios
import { UserService } from "./user.services"; //se define una instancia de la clase userService para obtener datos

export class AuthService {
  // los miembros de una clase no necesita la palabra rervada "CONST"
  ObtainDataUser = new UserService();
  async getUser(email, password) {
    const user = await this.ObtainDataUser.findByEmail(email);
    if (!user) throw boom.unauthorized();
    const Match: string = await bcrypt.compare(password, user.password);
    if (!Match) throw boom.unauthorized();
    delete user.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.secretJwt);
    return { user, token };
  }
}
