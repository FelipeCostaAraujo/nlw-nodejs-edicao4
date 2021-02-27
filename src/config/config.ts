require('./init')();

const config = {
    port: process.env.PORT,
    host: process.env.HOST,
    username: process.env.USERNAME,
    passwordDataBase: process.env.PASSWORD,
    database: process.env.DATABASE,
    info: process.env.INFO,
    saltkey: process.env.SALT_KEY
}

export default config;