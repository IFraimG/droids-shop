const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  publicPath: "auto",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "droids_shop_remote",
        filename: "remoteEntry.js",
        exposes: {
          "./RemoteApp": "./src/remote-entry.js"
        },
        shared: {
          vue: {
            singleton: true,
            eager: true,
            requiredVersion: "^2.6.11"
          },
          "vue-router": {
            singleton: true,
            eager: true,
            requiredVersion: "^3.1.6"
          },
          vuex: {
            singleton: true,
            eager: true,
            requiredVersion: "^3.1.3"
          }
        }
      })
    ]
  }
};
