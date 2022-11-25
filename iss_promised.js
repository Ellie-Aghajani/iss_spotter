const request = require("request-promise-native");

// 1
const fetchMyIP = function () {
  return request("https://api.ipify.org?format=json");
};

// 2
const fetchCoordsByIP = function (body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};
const fetchISSFlyOverTimes = function (body) {
    const { latitude, longitude } = JSON.parse(body);
    return request(
      `https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
    );
  };

module.exports = {
    fetchMyIP,
    fetchCoordsByIP,
    fetchISSFlyOverTimes
};