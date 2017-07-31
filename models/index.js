import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import config from "../config";

const db        = {};
const basename  = path.basename(module.filename);

const options = {
    host: config.database.host,
    dialect: config.database.dialect
};

if(config.env != 'development') {
    options.logging = null;
}

db.sequelize = new Sequelize(config.database.name, config.database.user, config.database.password, options);

fs
    .readdirSync(__dirname)
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        let model = db.sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

export default db;
