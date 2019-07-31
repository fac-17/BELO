const fs = require("fs");
const path = require("path");

module.exports = {
  staticAssets(req, res) {
    const extension = req.url.split(".")[1];
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    const filePath = path.join(__dirname, "..", req.url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        res.writeHead(500, "There is an error on our end");
      } else {
        res.writeHead(200, { "content-type": extensionType[extension] });
        res.end(file);
      }
    });
  },
  notFound(req, res) {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404: File not found");
    //request will still contain url but will not relate to real file

    //file doesn't exist so need to respond with header with 404 not found + res.end with message
  }
};
