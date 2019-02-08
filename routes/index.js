const router = require('express').Router()
const zomato = require('./zomato')

router.get('/zomato', zomato)

module.exports = router