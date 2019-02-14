const PATHS = require('./paths');

const clientEntries = {
    bundle: [`${PATHS.app}/client.js`],
};

const serverEntries = {
    server: `${PATHS.src}/server.js`,
};

module.exports = {
    clientEntries,
    serverEntries
};
