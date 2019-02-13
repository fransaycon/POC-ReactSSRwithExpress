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
    {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
            'file-loader',
            {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                },
            },
        ],
    }
];
