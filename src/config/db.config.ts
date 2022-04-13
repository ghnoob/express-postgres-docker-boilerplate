import { join } from 'path';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  database: process.env.DB_NAME ?? 'test',
  username: process.env.DB_USER ?? 'postgres',
  password: process.env.DB_PASS ?? 'admin',
  entities: [join(__dirname, '..', 'models', 'entities', '*.entity.ts')],
  migrations: [join(__dirname, '..', 'database', 'migrations', '*.ts')],
  subscribers: [
    join(__dirname, '..', 'database', 'subscribers', '*.subscriber.ts'),
  ],
  synchronize: process.env.NODE_ENV !== 'production',
});

export default dataSource;
