const path = require("path");
const webpack = require("webpack");

const PATHS = {
  build: path.join(__dirname, "build/static"),
  home: path.join(__dirname, "src/app/home", "index.js"),
};

module.exports = {
  entry: {
    index: PATHS.home,
  },
  module: {
    rules: [
      {
        test: /.js?$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
        }],
      }
    ],
  },
  output: {
    path: PATHS.build,
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  node: {
    fs: 'empty'
  },
};
