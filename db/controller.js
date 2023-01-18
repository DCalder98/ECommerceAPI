const pool = require('./database')

const getOrders = (req, res) => {
    pool.query('SELECT * FROM orders', (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getOrders,
};