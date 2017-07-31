import config from "./";
import fs from "fs";
import winston from "winston";
import _ from "lodash";
import moment from "moment"

/**
 * Create logs directory
 */
if (!fs.existsSync(`${config.root}/logs`)) {
    fs.mkdirSync(`${config.root}/logs`);
}

const params = {
    level: 'debug',
    transports: []
};

switch(config.env) {
    case 'production':
        params.level = 'verbose';
        params.transports.push(
            new (require('winston-daily-rotate-file'))({
                filename: `${config.root}/logs/log`,
                datePattern: 'yyyy-MM-dd.',
                prepend: true,
                colorize: false,
                json: false,
                formatter:(options) => {
                    options.message = _.replace(options.message, /\x1b\[[0-9;]*m/g, '');
                    return `${options.message} - ${moment().format('YYYY-MM-DD hh:mm:ss')}`
                }
            })
        );

        params.transports.push(
            new (winston.transports.Console)({
                name: 'console',
                colorize: false,
                prettyPrint: true,
                timestamp: true,
                json: false
            })
        );
    case 'test':
        break;
    default:
        params.transports.push(
            new (winston.transports.Console)({
                name: 'debug-console',
                colorize: true,
                prettyPrint: true,
                timestamp: true,
                json: false
            })
        );
        break;
}

const logger = new winston.Logger(params);

/**
 * Don't use arrow functions
 */
console.log = function() {
    logger.info.apply(logger, arguments);
};

console.warn = function() {
    logger.warn.apply(logger, arguments);
};

console.error = function() {
    logger.error.apply(logger, arguments);
};

console.debug = function() {
    logger.debug.apply(logger, arguments);
};

export default logger;
