const devPlugins = require('./dev-plugins');
const devRules = require('./dev-rules');
const devServerConfig = require('./dev-config');
const PATHS = require('../paths');
const { serverEntries } = require('../entries');

module.exports = {
    name: 'server',
    entry: serverEntries,
    module: {
        rules: devRules,
    },
    output: {
        path: PATHS.serverBuild,
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    node: {
        net: 'empty',
        fs: 'empty'
    },
    target: 'node',
    node: {
        __dirname: false,
    },
    externals: ['express'],
    plugins: devPlugins,
    mode: 'development',
    performance: {
        hints: false,
    },
};
