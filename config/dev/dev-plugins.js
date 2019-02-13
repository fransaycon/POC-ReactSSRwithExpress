const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');

module.exports = [
  new WriteFileWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]