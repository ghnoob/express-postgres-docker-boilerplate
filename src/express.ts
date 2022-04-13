import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import swaggerJSDoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import swaggerConfig from './config/swagger.config';
import requestLogger from './middlewares/request-logger.middleware';
import errorLogger from './middlewares/error-logger.middleware';

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(requestLogger);

app.use('/api', serve, setup(swaggerJSDoc(swaggerConfig)));

// routers go here

app.use(errorLogger);

export default app;
