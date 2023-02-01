"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const config_1 = require("../config/config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: config_1.default.dbHost,
    port: parseInt(config_1.default.dbPort) || 5432,
    username: config_1.default.dbUser,
    password: config_1.default.dbPassword,
    database: config_1.default.dbName,
    synchronize: true,
    logging: false,
    entities: [User_1.User],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map