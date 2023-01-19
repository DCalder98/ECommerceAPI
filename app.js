const express = require('express')
const uuid = require('uuid')
const app = express()
const cors = require('cors')
const session = require('express-session')

const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser');

const passport = require('passport')
const LocalStrategy = require('passport-local')

const ordersRoutes = require('./db/routes')
const { authenticate } = require('passport')

const port = 3000;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('hello world')
})

// Set middleware routes
app.use('/api', ordersRoutes)


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})