import { Connection, createConnection, getConnectionOptions } from 'typeorm'
import config from '../config/config';

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            type: "postgres",
            host: config.host,
            port: config.postgress_port,
            username: config.username,
            password: config.passwordDataBase,
            synchronize: true,
            logging: false,
            database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite" : config.database,
        })
    );
}
