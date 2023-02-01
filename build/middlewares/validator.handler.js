"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorHandler = void 0;
const boom = require("@hapi/boom");
function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error)
            next(boom.badRequest(`${error.name}: ${error.message}`));
        next();
    };
}
exports.validatorHandler = validatorHandler;
//# sourceMappingURL=validator.handler.js.map