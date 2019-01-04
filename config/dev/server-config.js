const PATHS = require("../paths");
const devServerConfig = require("./dev-config");
const webpack = require("webpack");
const { serverEntries } = require("../entries");
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');

module.exports = {
  name: 'server',
  entry: serverEntries,
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
    path: PATHS.serverBuild,
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  node: {
    net: 'empty',
    fs: 'empty'
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: ['express'],
  plugins: [
      new WriteFileWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  performance: {
      hints: false,
  },
};
