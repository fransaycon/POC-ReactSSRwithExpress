const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /.js?$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader'],
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: 'file-loader'
  },
];
