const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
    serverBuild: resolvePath('build'),
    clientBuild: resolvePath('build/static'),
    app: resolvePath('src/app'),
    src: resolvePath('src'),
}
