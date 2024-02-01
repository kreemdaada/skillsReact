const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/skillsReact-main/backend',
    createProxyMiddleware({
      target: 'http://localhost', // Your PHP server's address
      changeOrigin: true,
    })
  );
};