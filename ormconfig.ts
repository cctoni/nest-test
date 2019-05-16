import 'dotenv/config';
import { ConnectionOptions } from 'typeorm';

// const isProd = process.env.NODE_ENV === 'production';
// const migrationsDir = isProd
//   ? '/dist/migration/**/*.js'
//   : '/src/migration/**/*.ts';

const ormConfig = {
  type: process.env.CONNECTION,
  host: process.env.HOST,
  port: Number(process.env.DB_PORT || 5432),
  migrations: ['src/db/**/*.ts'],
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: process.env.SYNCHRONIZE,
  dropSchema: false,
  migrationsRun: true,
  logging: true,
  entities: ['src/**/*.entity{.ts, .js}'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export = ormConfig;
