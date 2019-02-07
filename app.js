const express = require('express')
const routes = require()
const app = express()


app.use(express.urlencoded({extended : false}))
app.use(express.json())
require('dotenv').config()
app.use('/', routes)

app.listen(3000, function() {
  console.log('start in 3000')
})