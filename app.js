import express from "express";
import bodyParser from "body-parser";
import logger from "./config/logger";
import routes from "./routes";
import expressValidator from "express-validator";
import expressWinston from "express-winston-2";
import NotFoundError from "./errors/not-found-error";
// import cors from "cors";

const app = express()

    //.use(cors())
    .use(bodyParser.json())

    /**
     * Winston log
     */
    .use(expressWinston.logger({
        winstonInstance: logger
    }))

    /**
     * Winston error log
     */
    .use(expressWinston.errorLogger({
        winstonInstance: logger
    }))

    .use(expressValidator())

    .use('/api', routes)

    /**
     * 404 Error handlers
     */
    .use((req, res, next) => {
        next(new NotFoundError('Not found'));
    })

    /**
     * Error handler
     */
    .use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            status: err.status || 500,
            message: err.message,
            errors: err.errors
        });
    })

    .listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

export default app;