import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import { Application } from "express";
import { AppDataSource } from "./db/data-source";

import {
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
} from "./middlewares/error.handler";
import config from "./config/config";
import { routerAPI } from "./routes";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app: Application = express();
    app.use(morgan("tiny"));
    app.use(bodyParser.json());
    // register express routes from defined application routes

    // setup express app here
    routerAPI(app);
    //add middleware
    app.use(boomErrorHandler);
    app.use(ormErrorHandler);
    app.use(errorHandler);

    // start express server
    app.listen(config.port);

    console.log(
      `Express server has started on port ${config.port}. Open http://localhost:${config.port}/ to see results`
    );
  })
  .catch((error) => console.log(error));
