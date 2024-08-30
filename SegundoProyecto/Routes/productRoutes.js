// Routes/productRoutes.js
const express = require('express');
const { createProduct, getProducts } = require('../Controllers/ProductController');

const router = express.Router();

// Ruta para crear productos
router.post('/create', createProduct);

// Ruta para obtener productos
router.get('/obtener', getProducts);

module.exports = router;
