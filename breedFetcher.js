const request = require("request");
const append = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds/search?q=' + append[0],(error, response, body) => {
  const data = JSON.parse(body);

  console.log("error:", error);
  //console.log(data);
  //console.log(typeof data);
  try {
    console.log(data[0].description);
  } catch (error) {
    console.log("Breed is not found in our database");
  }
 
});
