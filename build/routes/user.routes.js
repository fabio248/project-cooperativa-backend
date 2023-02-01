"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const validator_handler_1 = require("../middlewares/validator.handler");
const user_schema_1 = require("../schemas/user.schema");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/', user_controller_1.getUsers);
exports.userRouter.get('/:id', (0, validator_handler_1.validatorHandler)(user_schema_1.getUserSchema, 'params'), user_controller_1.getOneUser);
exports.userRouter.post('/', (0, validator_handler_1.validatorHandler)(user_schema_1.createUserSchema, 'body'), user_controller_1.createUser);
exports.userRouter.put('/:id', (0, validator_handler_1.validatorHandler)(user_schema_1.getUserSchema, 'params'), (0, validator_handler_1.validatorHandler)(user_schema_1.updateUserSchema, 'body'), user_controller_1.updateUser);
//# sourceMappingURL=user.routes.js.map