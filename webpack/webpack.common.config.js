const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const utils = require('./utils');

const SRC = '../src';
const BUILD = '../dist';
const PATHS = {
  app: path.join(__dirname, SRC),
  scripts: path.join(__dirname, SRC, 'js'),
  styles: path.join(__dirname, SRC, 'styles'),
  images: path.join(__dirname, SRC, 'img'),
  build: path.join(__dirname, BUILD),
};
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

const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  resolve: {
    root: [
      PATHS.app,
      PATHS.scripts,
      PATHS.styles,
    ],
    // Importing modules from these files will not require the extension.
    extensions: ['', '.js', '.jsx'],
  },
  entry: {
    // This will build an app.js file from the `main` module.
    app: ['main'],
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, SRC, 'index.html'),
      cache: true,
    }),
    new StyleLintPlugin({
      context: PATHS.styles,
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.scripts,
      },
    ],
    loaders: [
      {
        // Load js and jsx files using babel.
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need
        // something more custom, pass a path to it.
        // I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        // Parse only app js files! Without this it will go through
        // the entire project. In addition to being slow,
        // that will most likely result in an error.
        include: PATHS.scripts,
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        loader: 'file?name=img/[name].[hash].[ext]',
        include: PATHS.images,
      },
    ],
  }
};

module.exports = common;
module.exports.PATHS = PATHS;
