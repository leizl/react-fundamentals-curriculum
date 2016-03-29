var axios = require('axios');

/* ENDPOINTS
**  Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
**  5 Day Forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
*/
var _APIbase = 'http://api.openweathermap.org/data/2.5/';
var _APIkey = '25f2bb20576ba234c1fc46c57a629981';

function mapQueryStringParams(params) {
  return Object.keys(params)
    .map(function(key) {
      return key + '=' + encodeURIComponent(params[key]);
    }).join('&')
}

function getAPIurl(type, params) {
  return _APIbase + type + '?' + mapQueryStringParams(params);
}

function getQueryStringParams(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIkey,
    cnt: 5
  }
}

function getCurrentWeather(city) {
  var queryStringParams = getQueryStringParams(city);
  var APIurl = getAPIurl('weather', queryStringParams);

  return axios.get(APIurl)
    .then(function(weatherData) {
      console.log(weatherData.data)
    })
}

function getForecast(city) {
  var queryStringParams = getQueryStringParams(city);
  var APIurl = getAPIurl('forecast/daily', queryStringParams);

  return axios.get(APIurl)
    .then(function(forecastData) {
      console.log(forecastData.data)
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
};