"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.getUserSchema = exports.createUserSchema = void 0;
const Joi = require("joi");
const id = Joi.number();
const firstName = Joi.string().min(3);
const lastName = Joi.string().min(3);
const age = Joi.number();
const email = Joi.string().email();
const password = Joi.string().alphanum().min(8);
const birthday = Joi.date();
exports.createUserSchema = Joi.object({
    firstName: firstName.required(),
    lastName: lastName.required(),
    birthday: birthday.required(),
    email: email.required(),
    password: password.required(),
    age,
});
exports.getUserSchema = Joi.object({
    id: id.required(),
});
exports.updateUserSchema = Joi.object({
    firstName,
    lastName,
    birthday,
    email,
    password,
    age,
});
//# sourceMappingURL=user.schema.js.map