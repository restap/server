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
      res.status(200).json({coords, address})
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({err : err.message})
    })
  }

  static checkRoute(req, res) {
    axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${req.params.origin}&destination=${req.params.destination}&key=${process.env.googlemaps_apiKey}`)
    .then(({data}) => {
      let distance = data.routes[0].legs[0].distance.text
      let duration = data.routes[0].legs[0].duration.text
      let origin = data.routes[0].legs[0].start_location
      let destination = data.routes[0].legs[0].end_location
      res.status(200).json({distance, duration, origin, destination})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({err : err.message})
    })
  }

}

module.exports = ZomatoController
