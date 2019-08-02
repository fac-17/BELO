const https = require("https");

const myRequest = (url, cb) => {
  if (!url) {
    cb("No URL was found");
  } else {
    https.get(url, res => {
      let data = "";
      res.on("data", chunk => {
        data += chunk;
      });
      res
        .on("end", () => {
          const body = JSON.parse(data);
          const statusCode = res.statusCode;
          cb(null, {
            statusCode,
            body
          });
        })
        .on("error", err => cb(err));
    });
  }
};

module.exports = myRequest;
