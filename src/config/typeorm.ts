import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: '.env' });

const config = {
    type: 'mysql',
    host: `localhost`,
    port: `3306`,
    username: `root`,
    password: ``,
    database: `investigator`,
    entities: ["src/modules/investigator/*.entity{.ts,.js}"],
    migrations: ["src/modules/investigator/*{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: false,
}

export default registerAs('typeorm', () => config)
export const connectionSource = new DataSource(config as DataSourceOptions);