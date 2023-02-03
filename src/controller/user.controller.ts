import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.services";

const userService = new UserService();




export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.findAll();
  res.status(200).json(users);
};

export const getOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const user = await userService.findOne(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const user = await userService.create(data);
    return res.status(201).json({
      message: "Created user",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const changes = req.body;
    const changedUser = await userService.update(changes, id);
    return res.json({ message: "updated user", changerUSer: changedUser });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.delete(id);
    return res.json({ message: "deleted user", deletedUser });
  } catch (error) {
    next(error);
  }
};
