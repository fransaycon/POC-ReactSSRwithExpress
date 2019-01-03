const path = require("path");
const webpack = require("webpack");

const PATHS = {
  build: path.join(__dirname, "build"),
  server: path.join(__dirname, "src", "server.js"),
};

module.exports = {
  entry: {
    server: PATHS.server,
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
    net: 'empty',
    fs: 'empty'
  },
  target: 'node',
  externals: ['express'],
};
