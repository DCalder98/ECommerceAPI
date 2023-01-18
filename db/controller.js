const { use } = require('passport');
const pool = require('./database')
const queries = require('./queries')

// Logic to fetch all orders using query line 'getOrders'

const getOrders = (req, res) => {
    pool.query(queries.getOrders, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

// Logic to fetch a specific order using query line 'getOrderByID'

const getOrderByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getOrderByID, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

// Logic to fetch all products using query line 'getProducts'

const getProducts = (req, res) => {
    pool.query(queries.getProducts, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

// Logic to fetch a specific product using query line 'getProductByID'

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getCarts = (req, res) => {
    pool.query(queries.getCarts, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows)
    })
}

const getCartByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCartByID, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getCartItems = (req, res) => {
    pool.query(queries.getCartItems, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getCartItemByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getCartItemByID, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getUserByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByID, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows)
    })
}

const addOrder = (req, res) => {
    const {order_id, created, total, status, user_id } = req.body;
    pool.query(queries.getOrders, (err, results)=>{
        if (err) throw err;
        const order_id = results.rows.length+1;
        res.status(200).send('Recalled Orders');

    pool.query(queries.addOrder, [order_id, created, total, status, user_id], (err, results)=>{
        if (err) throw err;
            res.status(201).send('Order created successfully');
            console.log('Order Created');

    })
})
}

const addUser = (req, res) => {
    const { user_password, email, first_name, last_name, created } = req.body;

    pool.query(queries.checkUserExists, [email], (err, results) => {
        if (results.rows.length) {
            res.send('Email already Taken');
        } else {

            pool.query(queries.getUID, (err, results) => {
                if (err) throw err;
                res.status(200);
                const user_id = results.rows.length + 1;
                console.log(user_id);

                pool.query(queries.addUser, [user_id, user_password, email, first_name, last_name, created], (err, results) => {
                    if (err) throw err;
                    res.status(201);
                    console.log('User Created');
                })
            })
        }
    })

    // Add user to database
}

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
    addOrder
};