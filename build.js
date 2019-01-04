const webpack = require('webpack');
const rimraf = require('rimraf');
const webpackConfig = require('./config/webpack.config.js');
const PATHS = require("./config/paths");
const chalk = require("chalk");
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const logMessage = (message, level = 'info') => {
    const color = level === 'error' ? 'red' : level === 'warning' ? 'yellow' : 'white';
    console.log(`[${new Date().toISOString()}]`, chalk[color](message));
};

const compilerPromise = (name, compiler) => {
    return new Promise((resolve, reject) => {
        compiler.hooks.compile.tap(name, () => {
            logMessage(`[${name}] Compiling `);
        });
        compiler.hooks.done.tap(name, (stats) => {
            if (!stats.hasErrors()) {
                return resolve();
            }
            return reject(`Failed to compile ${name}`);
        });
    });
};

const build = async () => {
    rimraf.sync(PATHS.serverBuild);
    rimraf.sync(PATHS.clientBuild);

    const [clientConfig, serverConfig] = webpackConfig;
    const multiCompiler = webpack([clientConfig, serverConfig]);

    const clientCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'client');
    const serverCompiler = multiCompiler.compilers.find((compiler) => compiler.name === 'server');

    const clientPromise = compilerPromise('client', clientCompiler);
    const serverPromise = compilerPromise('server', serverCompiler);

    serverCompiler.watch({}, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log(stats.toString(serverConfig.stats));
            return;
        }
    });

    clientCompiler.watch({}, (error, stats) => {
        if (!error && !stats.hasErrors()) {
            console.log(stats.toString(clientConfig.stats));
            return;
        }
    });

    try {
        await serverPromise;
        await clientPromise;
        logMessage('Done building!', 'info');
    } catch (error) {
        logMessage(error, 'error');
    }
};

build();
