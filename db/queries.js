
// Fetch all orders in the database
const getOrders = 'SELECT * FROM orders';
// Fetch a specific order by ID
const getOrderByID = 'SELECT * FROM orders WHERE order_id = $1';
// Fetch all products in the database
const getProducts = 'SELECT * FROM product';
// Fetch a specific product by ID
const getProductById = 'SELECT * FROM product WHERE product_id = $1';


// Export queries
module.exports = {
    getOrders,
    getOrderByID,
    getProducts,
    getProductById
};