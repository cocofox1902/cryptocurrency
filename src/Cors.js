const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://pro-api.coingecko.com/",
      changeOrigin: true,
    })
  );
};
