const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  devtool: false,
  mode: "none",
  entry: "./src/index",
  optimization: {
    minimize: false
  },
  experiments: {
    outputModule: true,
    mjs: true
  },
  output: {
    module: true,
    libraryTarget: "module",
    jsonpScriptType: "module",
    library: "App",
    ecmaVersion: 2015
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader"
      }
    ]
  },

  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: JSON.stringify("development")
        }
      }
    }),
    new CopyPlugin([{ from: "index.html", to: "index.html" }])
  ],
  cache: {
    // 1. Set cache type to filesystem
    type: "filesystem",

    buildDependencies: {
      // 2. Add your config as buildDependency to get cache invalidation on config change
      config: [__filename]

      // 3. If you have other things the build depends on you can add them here
      // Note that webpack, loaders and all modules referenced from your config are automatically added
    },
    managedPaths: []
  }
};
