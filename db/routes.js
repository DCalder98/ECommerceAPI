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

router.get('/cart', controller.getCarts);

router.get('/cart/:id', controller.getCartByID);

router.get('/cartItem', controller.getCartItems);

router.get('/cartItem/:id', controller.getCartItemByID);

router.get('/users', controller.getUsers);

router.get('/users/:id', controller.getUserByID);


// POST ROUTES
router.post('/orders', controller.addOrder);

router.post('/users', controller.addUser);

module.exports = router;