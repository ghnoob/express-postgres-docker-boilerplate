import { join } from 'path';
import { Options } from 'swagger-jsdoc';

const swaggerConfig: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Boilerplate',
      version: '1.0.0',
      description:
        'This is a simple CRUD API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
    },
  },
  apis: [
    join(__dirname, '..', 'controllers', '*.controller.ts'),
    join(__dirname, '..', 'models', 'entities', '*.entity.ts'),
    join(__dirname, '..', 'models', 'dto', '*.dto.ts'),
    join(__dirname, '..', 'routes', '*.route.ts'),
  ],
};

export default swaggerConfig;
