const { Router } = require('express');
const controller = require('./controller')

const router = Router();
// Route to fetch all orders
router.get('/orders', controller.getOrders);
// Route to fetch a specific order
router.get('/orders/:id', controller.getOrderByID);
// route to fetch all products
router.get('/products', controller.getProducts);
// route to fetch a specific product
router.get('/products/:id', controller.getProductById);

module.exports = router;