
// Fetch all orders in the database
const getOrders = 'SELECT * FROM orders';
// Fetch a specific order by ID
const getOrderByID = 'SELECT * FROM orders WHERE order_id = $1';
// Fetch all products in the database
const getProducts = 'SELECT * FROM product';
// Fetch a specific product by ID
const getProductById = 'SELECT * FROM product WHERE product_id = $1';
// Fetch all carts
const getCarts = 'SELECT * FROM cart';
//Fetch specific Cart
const getCartByID = 'SELECT * FROM cart WHERE cart_id = $1';
//Fetch Cart Items
const getCartItems = 'SELECT * FROM cart_item';
//Fetch specific Cart Items
const getCartItemByID = 'SELECT * FROM cart_item WHERE cart_item_id = $1';
//Fetch Users
const getUsers = 'SELECT * FROM user_info';
//Fetch Specific User
const getUserByID = 'SELECT * FROM user_info WHERE user_id = $1';
const checkUserExists = 'SELECT u FROM user_info u WHERE u.email = $1';
// POST QUERIES
const addUser = 'INSERT INTO user_info (user_id, user_password, email, first_name, last_name, created) VALUES ($1, $2, $3, $4, $5, $6)';


// Export queries
module.exports = {
    getOrders,
    getOrderByID,
    getProducts,
    getProductById,
    getCarts,
    getCartByID,
    getCartItems,
    getCartItemByID,
    getUsers,
    getUserByID,
    addUser,
    checkUserExists
};