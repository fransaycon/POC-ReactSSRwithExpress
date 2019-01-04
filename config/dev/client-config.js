const PATHS = require("../paths");
const devServerConfig = require("./dev-config");
const webpack = require("webpack");
const { clientEntries } = require('../entries');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true;

module.exports = {
  name: 'client',
  entry: clientEntries,
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
    path: PATHS.clientBuild,
    filename: "[name].js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  node: {
    fs: 'empty'
  },
  plugins: [
      new WriteFileWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devtool: generateSourceMap ? 'cheap-module-inline-source-map' : false,
  performance: {
      hints: false,
  },
};
