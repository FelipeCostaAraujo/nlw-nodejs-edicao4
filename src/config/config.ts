require('./init')();

const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    postgress_port: process.env.POSTGRESS_PORT,
    username: process.env.USERNAME,
    passwordDataBase: process.env.PASSWORD,
    database: process.env.DATABASE,
    info: process.env.INFO,
    saltkey: process.env.SALT_KEY as string
}

export default config;