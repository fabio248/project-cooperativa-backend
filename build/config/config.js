"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const config = {
    port: process.env.PORT,
    dbName: process.env.DB_NAME,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
};
exports.default = config;
//# sourceMappingURL=config.js.map