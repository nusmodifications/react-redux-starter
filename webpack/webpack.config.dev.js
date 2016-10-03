const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const utils = require('./utils');
const devServer = require('./dev-server');

const config = merge(
  common,
  {
    devtool: 'eval-source-map',
  },
  utils.setFreeVariable('process.env.NODE_ENV', 'development'),
  utils.setupCSS(common.PATHS.styles),
  devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  })
);

module.exports = config;
