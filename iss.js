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
module.exports = {fetchMyIP};