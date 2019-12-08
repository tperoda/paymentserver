const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy(["/api", "/auth/google"], { target: process.env.REACT_APP_TARGET_URL }));
};