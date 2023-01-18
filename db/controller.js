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

const getOrderByID = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getOrderByID, [id], (err,results) =>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

// Logic to fetch all products using query line 'getProducts'

const getProducts = (req, res) => {
    pool.query(queries.getProducts, (err,results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}

// Logic to fetch a specific product using query line 'getProductByID'

const getProductById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (err, results)=>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getCarts = (req, res) =>{
    pool.query(queries.getCarts, (err, results)=>{
        if (err) throw err;
        res.status(200).json(results.rows)
    })
}

const getCartByID = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getCartByID, [id], (err, results)=>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getCartItems = (req,res) =>{
    pool.query(queries.getCartItems, (err, results)=>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getCartItemByID = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getCartItemByID, [id], (err,results)=>{
        if (err) throw err;
        res.status(200).json(results.rows);   
    })
}

const getUsers = (req, res) =>{
    pool.query(queries.getUsers, (err, results)=>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getUserByID = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getUserByID, [id], (err, results)=>{
        if (err) throw err;
        res.status(200).json(results.rows)
    })
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
    getUserByID
};