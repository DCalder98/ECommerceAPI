const { Router } = require('express');
const controller = require('./controller');
const passport = require('passport');
require('../resources/passportConfig')(passport);

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

//router.post('/auth/resgister', controller.registerUser);
router.post('/auth/signup', passport.authenticate('local-signup', { session: false }), (req, res, next) => {
    res.json({
        user: req.user,
    });
});

router.post('/auth/login', passport.authenticate('local-login', { session: false }), (req, res, next) => {
    res.json(
        {
            user: req.user,
        }
    );
});


module.exports = router;