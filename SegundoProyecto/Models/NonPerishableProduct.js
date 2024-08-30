// Models/NonPerishableProduct.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const NonPerishableProduct = sequelize.define('NonPerishableProduct', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    shelfLife: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = NonPerishableProduct;
