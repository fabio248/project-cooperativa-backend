import * as Joi from 'joi';

const id = Joi.number();
const firstName = Joi.string().min(3);
const lastName = Joi.string().min(3);
const age = Joi.number();
const email = Joi.string().email();
const password = Joi.string().alphanum().min(8);
const birthday = Joi.date();

export const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  birthday: birthday.required(),
  email: email.required(),
  password: password.required(),
  age,
});

export const getUserSchema = Joi.object({
  id: id.required(),
});

export const updateUserSchema = Joi.object({
  firstName,
  lastName,
  birthday,
  email,
  password,
  age,
});
