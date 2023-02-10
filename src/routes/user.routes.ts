import { Router } from "express";
import {
  createUser,
  deleteUser,
  getEmail,
  getOneUser,
  getUsers,
  updateUser,
} from "../controller/user.controller";
import { validatorHandler } from "../middlewares/validator.handler";
import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} from "../schemas/user.schema";

export const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", validatorHandler(getUserSchema, "params"), getOneUser);
// userRouter.get("/:email", validatorHandler(getUserSchema, "params"), getEmail);
userRouter.post("/", validatorHandler(createUserSchema, "body"), createUser);
userRouter.put(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  validatorHandler(updateUserSchema, "body"),
  updateUser
);
userRouter.delete(
  "/:id",
  validatorHandler(getUserSchema, "params"),
  deleteUser
);
