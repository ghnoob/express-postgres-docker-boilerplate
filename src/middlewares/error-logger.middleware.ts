import { errorLogger as createErrorLogger } from 'express-winston';
import requestLoggerConfig from '../config/request-logger.config';

const errorLogger = createErrorLogger(requestLoggerConfig);

export default errorLogger;
