const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
// fetchCoordsByIP("173.180.243.253", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work (Geolocation)!", error);
//     return;
//   }

//   console.log("It worked! Returned Geolocation:", coordinates);
// });