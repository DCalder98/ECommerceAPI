const { Router } = require('express');
const controller = require('./controller')

const router = Router();

router.get('/orders', controller.getOrders);

router.get('/orders/:id', controller.getOrderByID);

router.get('/products', controller.getProducts);

router.get('/products/:id', controller.getProductById);

module.exports = router;