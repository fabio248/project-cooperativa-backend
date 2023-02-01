"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.ormErrorHandler = exports.boomErrorHandler = void 0;
function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
}
exports.boomErrorHandler = boomErrorHandler;
function ormErrorHandler(err, req, res, next) {
    res.status(500).json({
        name: err.driverError.name,
        message: err.driverError.detail,
        stack: err.stack,
    });
}
exports.ormErrorHandler = ormErrorHandler;
function errorHandler(err, req, res, next) {
    res.status(err.statusCode || 500).json({ message: err });
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.handler.js.map