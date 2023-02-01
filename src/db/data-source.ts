import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import config from '../config/config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.dbHost,
  port: parseInt(config.dbPort) || 5432,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
