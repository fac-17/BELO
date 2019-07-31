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
  }
};

myRequest(myUrl, callback);
myRequest(null, callback);
