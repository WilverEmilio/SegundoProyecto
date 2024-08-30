// Factories/ProductFactory.js
const PerishableProduct = require('../Models/PerishableProduct');
const NonPerishableProduct = require('../Models/NonPerishableProduct');

class ProductFactory {
    static createProduct(type, data) {
        switch (type) {
            case 'perishable':
                return new PerishableProduct(data);
            case 'nonPerishable':
                return new NonPerishableProduct(data);
            default:
                throw new Error('Invalid product type');
        }
    }
}

module.exports = ProductFactory;
