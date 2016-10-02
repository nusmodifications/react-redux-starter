const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const utils = require('./utils');

// These dependencies will be extracted out into `vendor.js` in production build.
const vendor = [
  'axios',
  'lodash',
  'react',
  'redux',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux-logger',
  'redux-thunk',
];

const environment = 'production';
const config = merge(
  common,
  {
    devtool: 'source-map',
    output: {
      path: common.PATHS.build,
      filename: '[name].[chunkhash].js',
      // This is used for require.ensure. The setup
      // will work without but this is useful to set.
      chunkFilename: '[chunkhash].js',
    },
  },
  utils.clean(common.PATHS.build),
  utils.setFreeVariable('process.env.NODE_ENV', environment),
  utils.extractBundle({
    name: 'vendor',
    entries: vendor,
  }),
  utils.minify(),
  utils.extractCSS(common.PATHS.styles)
);

module.exports = config;
