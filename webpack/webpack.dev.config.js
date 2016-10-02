const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const utils = require('./utils');
const devServer = require('./dev-server');

const environment = 'development';
const config = merge(
  common,
  {
    devtool: 'eval-source-map',
  },
  utils.setFreeVariable('process.env.NODE_ENV', environment),
  utils.setupCSS(common.PATHS.styles),
  devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  })
);

module.exports = config;
