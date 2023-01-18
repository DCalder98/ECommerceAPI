const getOrders = 'SELECT * FROM orders';
const getOrderByID = 'SELECT * FROM orders WHERE order_id = $1';
const getProducts = 'SELECT * FROM product';
const getProductById = 'SELECT * FROM product WHERE product_id = $1';

module.exports = {
    getOrders,
    getOrderByID,
    getProducts,
    getProductById
};