const config = {
    env: process.env.NODE_ENV || 'development',
    root: `${__dirname}/../..`,
    host: process.env.HOST || 'http://localhost:3000',
    port: process.env.PORT || 3000,
    secretKey: process.env.SECRET || 'Whiskey in the jar',
    postgres: {
        name: process.env.DB_NAME || 'node-db',
        user: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'password',
        host: process.env.DB_HOST || 'localhost',
        dialect: process.env.DB_DIALECT || 'postgresql'
    },
    mongo: {
        host:  process.env.DB_MONGO_HOST || 'localhost',
        name: process.env.DB_MONGO_NAME || 'node-db'
    }
};

export default config;