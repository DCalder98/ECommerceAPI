const { Pool, Client} = require('pg')

// pools use environment variables
// for connection information

// .env file included with database information

const pool = new Pool()

pool.query('SELECT NOW()', (err,res)=>{
    console.log(err, res)
    pool.end()
})

const client = new Client()
await client.connect()

const res = await client.query('SELECT NOW()')
await client.end()