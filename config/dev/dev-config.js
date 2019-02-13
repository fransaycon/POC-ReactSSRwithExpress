const path = require('path');

module.exports = {
    publicPath: 'http://localhost:8080/static',
    watchContentBase: true,
    compress: true,
    port: 8080,
    inline: false,
    open: true,
    hot: true,
    contentBase: path.join(__dirname, 'build/static'),
}
