import { logger } from 'express-winston';
import requestLoggerConfig from '../config/request-logger.config';

const requestLogger = logger(requestLoggerConfig);

export default requestLogger;
