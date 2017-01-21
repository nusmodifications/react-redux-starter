React Redux Starter
==

Yet another minimal non-opinionated starter for modern single-page applications. This starter combines the good parts from the awesome [SurviveJS Webpack Guide](http://survivejs.com/webpack/) and Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app).

## Features

**Build System**
- Webpack, Webpack Dev Middleware, Webpack Hot Middleware

**JavaScript**
- Babel 6
- React v15 with Hot module reloading
- Redux
- React Router

**CSS**
- Bootstrap 4 with [Bulma theme](http://bulma.io/)
- Eslint (Airbnb, React presets)
- Sass
- Postcss (Stylelint, Autoprefixer)

## Getting Started

```
$ npm install
$ npm run build:dll # Do this whenever you update dependencies or change vendor bundle
$ npm start
```

## Development

Using the awesome `webpack.DllPlugin`, build (and rebuild) speeds can be increased. But first, you will have
to generate the dll file.

```
$ npm run build:dll
$ npm start
```

If you want to run the build for development without dll (why would you want to do that?), use the `-no-dll` flag.

```
$ npm start -- -no-dll
```

## Build for Deployment

```
$ npm run build
```

The built files will be generated in `dist` folder.

## TODO

- Code splitting example
