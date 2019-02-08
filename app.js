const express = require('express')

require('dotenv').config()

const app = express()
const port = 3000
const userRoutes = require('../server/routes/user')
// const hacktivGitRouter = require('./routes/github')
const cors = require('cors')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

mongoose.connect('mongodb://localhost:27017/restapp', {useNewUrlParser: true});


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cors())
app.use('/',userRoutes)

app.listen(port,function(){
    console.log('listen to port ', port);  
})