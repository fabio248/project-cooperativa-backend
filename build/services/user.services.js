"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const data_source_1 = require("../db/data-source");
const User_1 = require("../entities/User");
const calculateAge_1 = require("../utils/calculateAge");
class UserService {
    constructor() {
        this.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find();
            return users;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOneBy({ id });
            if (!user)
                throw boom.notFound('user not found');
            delete user.password;
            return user;
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashPassword = yield bcrypt.hash(data.password, 10);
            const dateBirthday = new Date(data.birthday);
            const age = (0, calculateAge_1.calculateAge)(dateBirthday);
            const newUser = Object.assign(new User_1.User(), Object.assign(Object.assign({}, data), { password: hashPassword, birthday: dateBirthday, age }));
            yield this.userRepository.save(newUser);
            delete newUser.password;
            return newUser;
        });
    }
    update(changes, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findOne(id);
            const changedUser = Object.assign(user, changes);
            this.userRepository.save(changedUser);
            return changedUser;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.services.js.map