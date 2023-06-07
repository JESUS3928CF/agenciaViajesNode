import { Sequelize } from 'sequelize';
/// automáticamente va e leer el archivo .env Importando las variables de entorno y
import dotenv from 'dotenv/config';

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: 3306,
        dialect: 'mysql',
        define: {
            timestamps: false,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        operatorsAliases: false,
    }
);

export default db;
