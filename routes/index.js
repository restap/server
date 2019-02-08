const router = require('express').Router()
const zomato = require('../controllers/zomatoController')

router.get('/:place', zomato.getGeoCode)
router.get('/:lat/:lng', zomato.findByGeocode)
router.get('/:origin/to/:destination', zomato.checkRoute)

module.exports = router