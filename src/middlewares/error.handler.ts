import { Response, Request, NextFunction } from "express";
import { QueryFailedError } from "typeorm";

export function boomErrorHandler(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

export function ormErrorHandler(
  err: QueryFailedError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(500).json({
    name: err.driverError.name,
    message: err.driverError.detail,
    stack: err.stack,
  });
  next();
}

export function errorHandler(
  err,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.statusCode || 500).json({ message: err });
  next();
}
