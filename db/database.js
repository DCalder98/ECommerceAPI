const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'ECommerce API'
})

client.connect();

client.query('SELECT * FROM orders', (err, result)=> {
    if(!err){
        console.log(result.rows);
    }
    client.end();
})