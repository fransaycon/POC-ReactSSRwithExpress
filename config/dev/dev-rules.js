const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    test: /.js?$/,
    exclude: /node_modules/,
    use: [{
        loader: 'babel-loader',
    }],
  },
];
