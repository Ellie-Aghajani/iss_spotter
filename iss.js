const request = require("request");
const apiUrl = "https://api.ipify.org?format=json";

const fetchMyIP = function (callback) {
  request(apiUrl, (error, response, body) => {
    if (error) return callback(error, null);
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    return callback(null, ip);
  });
};
const geoUrl = "https://freegeoip.app/json/";

const fetchCoordsByIP = function (ip, callback) {
  request(`${geoUrl}${ip}`, (error, response, body) => {
    // console.log(response.statusCode);
    // error can be set if invalid domain, user is offline, etc.
    if (error) return callback(error, null);

    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body); // parse the JSON into object

    callback(null, { latitude, longitude });
  });
};


const fetchISSFlyOverTimes = function (coords, callback) {
  request(
    `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`,
    (error, response, body) => {
      // console.log(response.statusCode);
      // error can be set if invalid domain, user is offline, etc.
      if (error) return callback(error, null);

      // if non-200 status, assume server error
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }

      const passes = JSON.parse(body).response; // parse the JSON into object

      callback(null, passes);
    }
  );
};

module.exports = {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};
