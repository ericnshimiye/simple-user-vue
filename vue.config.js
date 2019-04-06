module.exports = {
  chainWebpack: config => {
    config.devServer.proxy({
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true
      }
    });
  }
};
