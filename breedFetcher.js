const request = require("request");
const breed = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  let description;
  let errorDescription;
  request(
    `http://api.thecatapi.com/v1/breeds/search?q=` + breedName,
    function (error, response, body) {
      let apiRequest = JSON.parse(body);

      if (error) {
        return callback(error, null);
      }
      
      if (apiRequest.length === 0 ) {
        return callback("no data sent back", null);
      }
      
      if (JSON.parse(body).length > 0) {
        description = apiRequest[0].description;
        return callback(null, description);
      } 
    
    }
  );
};

//fetchBreedDescription();

module.exports = { fetchBreedDescription };
