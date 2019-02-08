const axios = require('axios')


class ZomatoController {

  static findByGeocode(req, res) {
    axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${req.params.lat}&lon=${req.params.lng}`, 
    {
      headers : {
        ["user-key"] : process.env.zomato_API
      }
    })
    .then(({data} ) => {
      res.status(200).json(data.nearby_restaurants)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({err : err.message})
    })
  }

  static getGeoCode(req, res) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.place}&key=${process.env.googlemaps_apiKey}`)
    .then(({data}) => {
      let coords = data.results[0].geometry.location
      let address = data.results[0].formatted_address
      res.json({coords, address})
    })
    .catch((err) => {
      console.log(err);
    })
  }

}

module.exports = ZomatoController
