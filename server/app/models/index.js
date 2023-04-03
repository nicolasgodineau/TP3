const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    operatorAliases: false,
});
const db = {};
db.Sequelize = Sequelize;

db.connex = connex;
db.photos = require("./photos.model.js")(connex, Sequelize);
module.exports = db;
