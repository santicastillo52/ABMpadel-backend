import {DataSource} from 'typeorm';
import {Court} from './entities/court'

export const AppDataSource = new DataSource({
    type: "postgres",
  url: process.env.DATABASE_URL!,
  ssl: {
    rejectUnauthorized: false, 
  },
  synchronize: true, 
  logging: true,
  entities: [Court],
  migrations: [],
  subscribers: [],
})