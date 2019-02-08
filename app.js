require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes/index') 
const userRoutes = require('../server/routes/user')
// const hacktivGitRouter = require('./routes/github')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/restapp', {useNewUrlParser: true});

const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/zomato', routes)
app.use('/',userRoutes)

app.listen(port,function(){
    console.log('listen to port ', port);  
})