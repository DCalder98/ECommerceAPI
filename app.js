const express = require('express')
const uuid = require('uuid')
const app = express()
const cors = require('cors')
const session = require('express-session')

const FileStore = require('session-file-store')(session)
const bodyParser = require('body-parser');

const passport = require('passport')
const localStrategy = require('passport-local')


const port = 3000

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})