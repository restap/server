const axios = require('axios')


class ZomatoController {

  static findByGeocode(req, res) {
    axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${req.params.lat}lon=${req.params.lon}`, 
    {
      params : {
        ["user-key"] : process.env.zomato_API
      }
    })
    .then(({ nearby_restaurants }) => {
      res.status(200).json(nearby_restaurants)
    })
    .catch(err => {
      res.status(500).json({err : err.message})
    })
  }

  static getGeoCode(req, res) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.place}&key=${process.env.google_API}`)
    .then(({result}) => {
      let geometry = result[0].geometry
      let address = result[0].formatted_address
    })
  }
}

module.exports = ZomatoController
