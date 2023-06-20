const request = require('request');
const breed = process.argv [2];

const fetch = function() {
  
  request(`http://api.thecatapi.com/v1/breeds/search?q=` + breed, function(error, response, body) {
     
  
    if (error) {
      console.log("Sorry that seems to be an issue with your url");
      return;
    }

    if (JSON.parse(body).length === 0) {
      console.log("Look like you might have entered an invalid breed");
      return;
    }
    let store = JSON.parse(body);
    console.log(store[0].description);
  });
};

fetch();