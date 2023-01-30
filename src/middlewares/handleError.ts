import { Response, Request } from 'express';
export function errorHandler(err, req: Request, res: Response, next: Function) {
  res.status(err.statusCode || 500).send({ message: err });
}

export function boomErrorHandler(
  err,
  req: Request,
  res: Response,
  next: Function
) {
  if (err.isBoom) {
    const { output } = err;
    res.status(err.statusCode).json(err.message);
  }
  next(err);
}
