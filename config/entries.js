const PATHS = require("./paths");

const clientEntries = {
    home: `${PATHS.app}/home/index.js`,
    webpackDevServer: 'webpack-dev-server/client?http://localhost:8080',
    webpackHotModule: 'webpack/hot/only-dev-server',
};

const serverEntries = {
    server: `${PATHS.src}/server.js`,
    webpackDevServer: 'webpack-dev-server/client?http://localhost:8080',
    webpackHotModule: 'webpack/hot/only-dev-server',
};

module.exports = {
    clientEntries,
    serverEntries
};
