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
exports.updateUser = exports.createUser = exports.getOneUser = exports.getUsers = void 0;
const user_services_1 = require("../services/user.services");
const userService = new user_services_1.UserService();
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userService.findAll();
    res.status(200).json(users);
});
exports.getUsers = getUsers;
const getOneUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield userService.findOne(id);
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.getOneUser = getOneUser;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const user = yield userService.create(data);
        return res.status(201).json({
            message: 'Created user',
            user,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createUser = createUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const changes = req.body;
        const changedUser = yield userService.update(changes, id);
        return res.json({ message: 'updated user', changerUSer: changedUser });
    }
    catch (error) {
        next(error);
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=user.controller.js.map