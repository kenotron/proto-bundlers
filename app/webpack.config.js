const webpack = require("webpack");

module.exports = {
  devtool: false,
  mode: "none",
  entry: "./src/index",
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader"
      }
    ]
  },
  experiments: {
    outputModule: true
  },
  output: {
    module: true,
    library: "MyApp",
    libraryTarget: "module"
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
    })
  ]
};
