const env2 = require("env2")("./api.env");
const API_KEY = process.env.API_KEY;
const URL = "https://newsapi.org/v2/everything";
const prepareAPIcallURL = searchTerm => {
  return URL + "?q=" + searchTerm;
};

module.exports = {
  prepareAPIcallURL
};
