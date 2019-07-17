const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a894bf669eb8adf439698efd73a87730/' + latitude + ',' + longitude + '?units=uk2'

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)

        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. There will be a high of ' + body.daily.data[0].temperatureHigh + ' degrees and a low of ' + body.daily.data[0].temperatureLow)
        }

    })
}

module.exports = forecast
