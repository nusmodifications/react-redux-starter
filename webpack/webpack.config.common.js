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

const common = {
  // This tells Webpack where to look for modules.
  resolve: {
    // Specify a few root paths when importing our own modules,
    // so that we can use absolute paths in our imports.
    // E.g. Importing our own module at `/js/path/to/module` will simply be:
    // `import module from 'path/to/module;`
    root: [
      PATHS.app,
      PATHS.scripts,
      PATHS.styles,
    ],
    // Importing modules from these files will not require the extension.
    extensions: ['', '.js', '.jsx', '.json'],
  },
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
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
    // First, run the linter.
    // It's important to do this before Babel processes the JS.
    preLoaders: [
      // Before everything else, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|jsx)$/,
        loaders: ['eslint'],
        include: PATHS.scripts,
      },
    ],
    loaders: [
      {
        // Process js and jsx files using Babel.
        test: /\.(js|jsx)$/,
        // Parse only our own js files! Without this it will go through
        // the node_modules code.
        include: PATHS.scripts,
        loader: 'babel',
        query: {
          // Enable caching for improved performance during development
          // It uses default OS directory by default. If you need
          // something more custom, pass a path to it.
          // i.e., cacheDirectory: <path>
          cacheDirectory: true
        },
      },
      {
        // JSON is not enabled by default in Webpack but both Node and Browserify
        // allow it implicitly so we also enable it.
        test: /\.json$/,
        loader: 'json'
      },
      {
        // Works like file-loader but if the file size is below the specified limit
        // the file is converted into a data URL and inlined to avoid requests.
        test: /\.(ico|jpg|jpeg|png|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]',
        },
        include: PATHS.images,
      },
      // TODO: Support font loading?
    ],
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};

module.exports = common;
module.exports.PATHS = PATHS;
