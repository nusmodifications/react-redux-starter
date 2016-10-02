const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const utils = require('./utils');

// These dependencies will be extracted out into `vendor.js` in production build.
// App bundle changes more often than vendor bundle and splitting app bundle from
// 3rd-party vendor bundle allows the vendor bundle to be cached.
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

const config = merge(
  common,
  {
    // Don't attempt to continue if there are any errors.
    bail: true,
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: 'source-map',
    output: {
      // The build folder.
      path: common.PATHS.build,
      filename: '[name].[chunkhash].js',
      // This is used for require.ensure. The setup
      // will work without but this is useful to set.
      chunkFilename: '[chunkhash].js',
    },
  },
  // Delete the build folder.
  // TODO: Use create-react-app's way of building that shows file size differences.
  utils.clean(common.PATHS.build),
  utils.setFreeVariable('process.env.NODE_ENV', 'production'),
  utils.extractBundle({
    name: 'vendor',
    entries: vendor,
  }),
  utils.minify(),
  utils.extractCSS(common.PATHS.styles)
);

module.exports = config;
