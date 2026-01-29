const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  // publicPath: "http://localhost:8080/",
  publicPath: "auto",
  assetsDir: "",
  devServer: {
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      // "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    // proxy: {
    //   "^/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" }
    //   }
    // }
  },
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
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
          },
          "vue-router": {
            singleton: true,
            
          },
          vuex: {
            singleton: true,
          }
        }
      })
    ]
  },
};
