import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
  secretJwt: process.env.SECRET_JWT,
};

export default config;
