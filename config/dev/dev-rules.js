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
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
            {
                loader: 'css-loader',
                query: {
                    localIdentName: '[hash:8]',
                    modules: true
                }
            },
            {
                loader: 'sass-loader'
            }
        ]
    })
  },
];
