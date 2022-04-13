import { LoggerOptions } from 'express-winston';
import logger from '../logger';

const requestLoggerConfig: LoggerOptions = {
  winstonInstance: logger,
  meta: process.env.NODE_ENV === 'debug',
  msg: '{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}',
  level: (_req, res, err) => {
    if (err) {
      return 'error';
    }

    if (res) {
      return 'debug';
    }

    return 'info';
  },
};

export default requestLoggerConfig;
