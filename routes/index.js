const router = require('express').Router()
const zomato = require('../controllers/zomatoController')

router.get('/:place', zomato.getGeoCode)
router.get('/:lat/:lng', zomato.findByGeocode)

module.exports = router