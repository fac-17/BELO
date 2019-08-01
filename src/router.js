const handlers = require("./handler");

const router = (req, res) => {
  if (req.url === "/") {
    req.url = "/public/index.html";
  }
  if (req.url.startsWith("/public")) {
    handlers.staticAssets(req, res);
  } else if (req.url.startsWith("/everything")) {
    handlers.apiRequest(req, res);
  } else {
    handlers.notFound(req, res);
  }
};

module.exports = router;
