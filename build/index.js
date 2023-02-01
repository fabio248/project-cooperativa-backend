"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const data_source_1 = require("./db/data-source");
const error_handler_1 = require("./middlewares/error.handler");
const config_1 = require("./config/config");
const routes_1 = require("./routes");
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    // create express app
    const app = express();
    app.use(morgan('tiny'));
    app.use(bodyParser.json());
    // register express routes from defined application routes
    // setup express app here
    (0, routes_1.routerAPI)(app);
    //add middleware
    app.use(error_handler_1.boomErrorHandler);
    app.use(error_handler_1.ormErrorHandler);
    app.use(error_handler_1.errorHandler);
    // start express server
    app.listen(config_1.default.port);
    console.log(`Express server has started on port ${config_1.default.port}. Open http://localhost:${config_1.default.port}/users to see results`);
}))
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map