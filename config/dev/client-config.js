const devPlugins = require('./dev-plugins');
const devRules = require('./dev-rules');
const devServerConfig = require('./dev-config');
const generateSourceMap = process.env.OMIT_SOURCEMAP === 'true' ? false : true;
const PATHS = require('../paths');
const { clientEntries } = require('../entries');

module.exports = {
  name: 'client',
  entry: clientEntries,
  module: {
    rules: devRules,
  },
  output: {
    path: PATHS.clientBuild,
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  node: {
    fs: 'empty',
    window: 'empty',
  },
  plugins: devPlugins,
  mode: 'development',
  devtool: generateSourceMap ? 'cheap-module-inline-source-map' : false,
  performance: {
      hints: false,
  },
};
