import { DataSource } from "typeorm";
import env from "./env";
import Country from "./entities/Country";

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: env.DB_NAME,
  entities: [Country],
  synchronize: true,
});

export default AppDataSource;