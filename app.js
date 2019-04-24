const request = require('request');

const url =
  'https://api.darksky.net/forecast/e1b8ca647e7f800580664054e6241605/50.82047,-0.13874?units=uk2';

request({ url, json: true }, (error, response) => {
  console.log(
    response.body.daily.data[0].summary +
      ' It is currently ' +
      response.body.currently.temperature +
      ' degrees out. There is a ' +
      response.body.currently.precipProbability +
      '% chance of rain.'
  );
});

// Geocoding
const geocodeUrl =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGItZGV2IiwiYSI6ImNqdXZwaDN2aTAzdWQ0NHFibmppbDBoZmgifQ.7dj_kkebOGAKiTPTlF3xZg&limit=1';

request({ url: geocodeUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
