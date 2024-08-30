// Controllers/ProductController.js
const PerishableProduct = require('../Models/PerishableProduct');
const NonPerishableProduct = require('../Models/NonPerishableProduct');
const ProductFactory = require('../Factories/ProductFactory');

// Crear productos
const createProduct = async (req, res) => {
    const { type, data } = req.body;
    try {
        const product = ProductFactory.createProduct(type, data);
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener productos
const getProducts = async (req, res) => {
    try {
        const perishableProducts = await PerishableProduct.findAll();
        const nonPerishableProducts = await NonPerishableProduct.findAll();
        res.status(200).json({
            perishableProducts,
            nonPerishableProducts
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
};

module.exports = {
    createProduct,
    getProducts,
};
