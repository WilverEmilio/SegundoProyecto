// Models/PerishableProduct.js
const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');

const PerishableProduct = sequelize.define('PerishableProduct', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    expirationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = PerishableProduct;
