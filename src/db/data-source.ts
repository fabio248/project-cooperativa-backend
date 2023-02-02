import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "../config/config";
import { User } from "../entities/User.entity";
import { Partner } from "../entities/Partner.entity";
import { Beneficiary } from "../entities/Beneficiary.entity";
import { FamilyStatus } from "../entities/FamilyStatus.entity";
import { Spouse } from "../entities/Spouse.entity";
import { Adress } from "../entities/Adress.entity";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: config.dbHost,
  port: parseInt(config.dbPort) || 5432,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  synchronize: true,
  logging: false,
  // entities: ["entities/**/*.entity.ts"],
  entities: [User, Partner, Beneficiary, Spouse, FamilyStatus, Adress],
  migrations: [],
  subscribers: [],
});
