"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerAPI = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user.routes");
function routerAPI(app) {
    const router = (0, express_1.Router)();
    app.use('/api/v1', router);
    router.use('/users', user_routes_1.userRouter);
}
exports.routerAPI = routerAPI;
//# sourceMappingURL=index.js.map