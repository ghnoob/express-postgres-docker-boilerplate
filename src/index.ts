import 'reflect-metadata';
import { config } from 'dotenv';

config();

import { useContainer } from 'typeorm';
import { Container } from 'typeorm-typedi-extensions';
import app from './express';
import dataSource from './config/db.config';
import logger from './logger';

async function bootstrap() {
  useContainer(Container);

  try {
    await dataSource.initialize();
    logger.info('Database connected.');
  } catch (err) {
    logger.error('Could not connect to the database.');
    logger.error(err);
  } finally {
    const port = process.env.SERVER_PORT
      ? Number(process.env.SERVER_PORT)
      : 3000;
    app.listen(port, () => {
      logger.info(`Server listening on port ${port}.`);
    });
  }
}

bootstrap();
