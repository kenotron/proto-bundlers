const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    new HtmlWebpackPlugin({
      template: "./index.ejs",
      appMountId: "root"
    })
  ]
};
