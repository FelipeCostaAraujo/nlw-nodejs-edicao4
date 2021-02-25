require('./init')();

const config = {
    host: process.env.HOST,
    user: process.env.DATABASEUSER,
    passwordDataBase: process.env.PASSWORD,
    database: process.env.DATABASE,
    info: process.env.INFO
}

export default config;