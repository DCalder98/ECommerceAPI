const pool = require('./database')
const queries = require('./queries')

const getOrders = (req, res) => {
    pool.query(queries.getOrders, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getOrderByID = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getOrderByID, [id], (err,results) =>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

const getProducts = (req, res) => {
    pool.query(queries.getProducts, (err,results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
    })
}

const getProductById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getProductById, [id], (err, results)=>{
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getOrders,
    getOrderByID,
    getProducts,
    getProductById
};