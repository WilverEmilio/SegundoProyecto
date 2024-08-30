// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('products_db', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
