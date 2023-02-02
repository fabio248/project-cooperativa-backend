import * as boom from "@hapi/boom";
import * as bcrypt from "bcrypt";
import { AppDataSource } from "../db/data-source";
import { User } from "../entities/User.entity";
import { calculateAge } from "../utils/calculateAge";

export class UserService {
  private userRepository = AppDataSource.getRepository(User);

  async findAll(): Promise<Array<User>> {
    const users: Array<User> = await this.userRepository.find();
    users.map((user: User) => delete user.password);
    return users;
  }

  async findOne(id): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw boom.notFound("user not found");
    delete user.password;
    return user;
  }

  async create(data): Promise<User> {
    const hashPassword: string = await bcrypt.hash(data.password, 10);
    const dateBirthday = new Date(data.birthday);
    const age = calculateAge(dateBirthday);
    const newUser: User = Object.assign(new User(), {
      ...data,
      password: hashPassword,
      birthday: dateBirthday,
      age,
    });
    await this.userRepository.save(newUser);
    delete newUser.password;
    return newUser;
  }

  async update(changes, id): Promise<User> {
    const user: User = await this.findOne(id);
    const changedUser: User = Object.assign(user, changes);
    await this.userRepository.save(changedUser);
    return changedUser;
  }

  async delete(id) {
    const user: User = await this.findOne(id);
    await this.userRepository.remove(user);
    return user;
  }
}
