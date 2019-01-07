const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");

module.exports = [
  new WriteFileWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin({
    filename: 'styles/[name].css',
    allChunks: true
  }),
]