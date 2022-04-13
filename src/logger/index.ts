import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  transports: [new transports.Console()],
  level: process.env.NODE_ENV === 'debug' ? 'debug' : 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.splat(),
    format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`),
  ),
});

export default logger;
