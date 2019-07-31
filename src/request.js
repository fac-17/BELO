const http = require("http");
const myUrl = "www.google.com";

const myObj = {
  statusCode: 200,
  body: {
    hisname: "Emmanuel",
    myname: "Gregor"
  }
};

const callback = (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body.myname);
    // Handle response
  }
};

const myRequest = (url, cb) => {
  if (!url) {
    cb("No URL was found");
  } else {
    cb(null, myObj);
    http.get(url, res => {
      let data = "";
      res.on("data", chunk => {
        data += chunk;
      });
      res
        .on("end", () => {
          const body = JSON.parse(data);
          const statusCode = res.statusCode;
          cb(null, { statusCode, body });
        })
        .on("error", err => cb(err));
    });
  }
};

myRequest(myUrl, callback);
myRequest(null, callback);
